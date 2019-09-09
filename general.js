class person_location{
	constructor(name){
		//Accquire Json with information about their hometown.
		const lookup = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format("Portland, OR, USA")+"&key="

		//Locate the City by name through Google Maps API
		var xmlHttp = new XMLHttpRequest({mozSystem: true});
		xmlHttp.open( "GET","https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format(name)+"&key=",false);
		xmlHttp.send(null);
 		const parsed = JSON.parse(xmlHttp.responseText);
 		//console.log(parsed.results[0])

 		//Setup classe's attributes
		this.name = parsed.results[0].formatted_address;
		this.lat = parsed.results[0].geometry.location.lat;
		this.lng = parsed.results[0].geometry.location.lng;
		this.region = region(this.name, this.lat, this.lng);
        };
};

function score_gender(gen1, gen2){
	if(gen1==gen2){
		return 1
	}
	else if(gen1 != "Male" && gen1 != "Female" && gen2 != "Male" && gen2 != "Female"){
		return 1
	}
	else{
		return 0
	}
}

function score_major(maj1, maj2){
	var score =0;
	if(major_data[maj1.major.toUpperCase()].major ===major_data[maj2.major.toUpperCase()].major){
		console.log("same major!")
		score +=1.1;
	}
	if(major_data[maj1.major.toUpperCase()].college ===major_data[maj2.major.toUpperCase()].college){
		console.log("same college")
		score +=1;
	}
	return score;
}

function score_grad_year(person1, person2){

	var year1 = parseInt(person1.gradYear)
	var year2 = parseInt(person2.gradYear)

	if(person1.pairType === "Big"){

		if (year1 > year2){
			return 0;
		}
		else if ( year1 === year2){
			return 0.5;
		}
		else{
			return 1;
		}

	}
	else{
		if (year1 <year2){
			return 0;
		}
		else if ( year1 === year2){
			return 0.5;
		}
		else{
			return 1;
		}

	}

}

function score_diet(diet1, diet2){
	diet1 = (diet1.trim()).toUpperCase();
	diet2 = (diet2.trim()).toUpperCase();

	if(diet1 === "N/A" || diet1 === "NA" || diet1 === "NONE"){
		diet1 = "";
	}
	if(diet2 === "N/A" || diet2 === "NA" || diet2 === "NONE"){
		diet2 = "";
	}

	if(diet1 === diet2 && diet1.length ===0){
		return 1;
	}
	else if (diet1.length >0 && diet2.length> 0){
		return 1;
	}
	else if(diet1 === diet2){
		return 2;
	}
	else{
		return 0;
	}

}

function score_spectrum(score1, score2, close){
	if (close === true) return (1-(Math.abs( parseInt(score2)-parseInt(score1) ))/10);
	else return (Math.abs( parseInt(score2)-parseInt(score1) ) )/10;
}

function score_likes_dislikes(like1, dislike1, like2, dislike2){

	var common= [[], [] , [], []  ] ;
	var score=0;

	//format data for processing
	//Converting all to (uppercase) String arrays

	like1 = like1.replace(/&/, ",").replace(/and/, ",")
	like2 = like2.replace(/&/, ",").replace(/and/, ",")

	dislike1 = dislike1.replace(/&/, ",").replace(/and/, ",")
	dislike2 = dislike2.replace(/&/, ",").replace(/and/, ",")



	like1List = (like1.split(",")).map(
							function(x){ 
								return (x.trim()).toUpperCase()
							});
	dislike1List = (dislike1.split(",")).map(
							function(x){ 
								return (x.trim()).toUpperCase()
							});
	like2List = (like2.split(",")).map(
							function(x){ 
								return (x.trim()).toUpperCase()
							});
	dislike2List = (dislike2.split(",")).map(
							function(x){ 
								return (x.trim()).toUpperCase()
							});
	
	//Go through the dislike and like list and search for differences and commonalities 

	for (var i =0; i< like1List.length; i++){
		if(like2List.indexOf(like1List[i]) !== -1){
			score +=0.5;
			common[0].push(like1List[i] );
		}else if(dislike2List.indexOf(like1List[i]) !== -1){
			score += -0.5;
			common[2].push(like1List[i] );
		}
	}

	for (var i =0; i< dislike1List.length; i++){
		if(like2List.indexOf(dislike1List[i]) !== -1){
			score += -0.5;
			common[3].push(like1List[i]);
		}else if(dislike2List.indexOf(like1List[i]) !== -1){
			score += 0.5;
			common[1].push(like1List[i]);
		}
	}

	common.push(score)

	return common;

}
//Determines which college is in based on major
//Returns string if it is a valid major
//Returns string 
function get_major(major){
	var parsedMajor = major.trim()
	if(parsedMajor.indexOf('/') !==-1){
		parsedMajor = (parsedMajor.slice(0, parsedMajor.indexOf('/')))
	}
	else if(parsedMajor.indexOf('-') !==-1){
		parsedMajor = (parsedMajor.slice(0, parsedMajor.indexOf('-')))
	}
	else if(parsedMajor.indexOf('>') !==-1){
		parsedMajor = (parsedMajor.slice(0, parsedMajor.indexOf('>')))
	}

	console.log(parsedMajor)
	return major_data[parsedMajor.toUpperCase()];
}

function cap_arr(arr){
	for (var i =0; i < arr.length; i ++){
		arr[i] = arr[i].toUpperCase();
	}
	return arr
}

function getScore(){

/*

class Member{
  constructor(line){
    this.time = line[categories.indexOf("Timestamp")] 
    this.cpEmail = line[categories.indexOf("Cal Poly Email")] 
    this.pairType = line[categories.indexOf("Do you want to be a Big or a little?")] 
    this.name = line[categories.indexOf("First Name")] + " " + line[categories.indexOf("Last Name")]
    this.hometown =new Location (line[categories.indexOf("Hometown:")] ) //needs function
    this.gender = line[categories.indexOf("Gender Identity:")] 
    this.major = get_major(line[categories.indexOf("Major")])  //needs function
    this.gradYear = line[categories.indexOf("Graduation Year")] 
    this.tSize = line[categories.indexOf("T-Shirt Size")] 
    this.birthday = line[categories.indexOf("Birthday")]  //maybe function?
    this.dietary =line[categories.indexOf("Dietary Restrictions (Not Allergies)")]  //maybe function?
    this.allergies = line[categories.indexOf("Food Allergies")] 
    this.myerBriggs = line[categories.indexOf("Optional: Myer Briggs Score")] 
    this.matchOn = line[categories.indexOf("Please try to match my Big/Little based on:")] 
    this.partying = line[categories.indexOf("How much do you plan on partying?")] 
    this.spontan = line[categories.indexOf("How spontaneous are you?")] 
    this.trovert = line[categories.indexOf("How introverted or extroverted are you?")] 
    this.foodLikes= line[categories.indexOf("Foods+Drinks you like:")] 
    this.foodDislikes = line[categories.indexOf("Foods+Drinks you dislike:")] 
    this.showLikes = line[categories.indexOf("TV Shows / Movies you like:")] 
    this.showDislikes =line[categories.indexOf("TV Shows / Movies you dislike:")] 
    this.sportsLikes =line[categories.indexOf("Sports / Team(s) you like:")] 
    this.sportsDislikes = line[categories.indexOf("Sports / Team(s) you dislike:")] 
    this.animalLikes =line[categories.indexOf("Animals you like:")] 
    this.animalDislikes = line[categories.indexOf("Animals you dislike:")] 
    this.musicLikes =line[categories.indexOf("Music you like:")] 
    this.musicDislikes = line[categories.indexOf("Music you dislike:")] 
    this.weirdLikes = line[categories.indexOf("Weird likes:")] 
    this.weirdDislikes = line[categories.indexOf("Weird dislikes")] 
    this.adjectives = line[categories.indexOf("What are 3 adjectives that describe you?")] 
    this.hobbies = line[categories.indexOf("What are some of your hobbies? Be as specific as possible.")] 
    this.podcast = line[categories.indexOf("If you were the host of a podcast, what would you talk about?")] 
    this.fears = line[categories.indexOf("Biggest fears? Pet peeves?")] 
    this.bucketList = line[categories.indexOf("3 things on your bucket list?")] 
    this.inspiresYou = line[categories.indexOf("Who inspires you the most and why? (Non family member)")] 
    this.stupidThing = line[categories.indexOf("Name one REALLLLYYYYY stupid thing you want to do, but would never do?")] 
    this.toDo = line[categories.indexOf("What do you want to do in SLO before you graduate?")] 
    this.freeDay = line[categories.indexOf("All your classes are suddenly cancelled today! Even better you have no other responsibilities! How do you spend your day off?")] 
    this.freeMoney = line[categories.indexOf("You are mysteriously given $10,000 but it all disappears in a week(so you can't save it), what do you do with it?")] 
    this.whatelse = line[categories.indexOf("Anything else you would board/your big to know? (You may request a big/little/family but they are not guaranteed to be paired with you) ")] 
  }
}

      var to = ["Hometown", "Gender", "Major",
                "Grad Year", "Diet", 
                "Myer-Briggs", "Partying", "Spontaneity",
                  "Extraversion", "Food & Drink", "TV & Movies",
                  "Sports", "Animals", "Music",
                  "Weird Tastes", "Hobbies"]

*/

	var score = 0;

	var choices = [];

	if(params.length ===0 || currPerson === ""){
		return -1;
	}


	for( var cur in csa_members){
		if(cur !== currPerson &&  csa_members[currPerson].pairType !== csa_members[cur].pairType){

			if(params.indexOf("Hometown") !== -1){
				score += score_location(csa_members[currPerson].hometown, csa_members[cur].hometown);
			}

			if(params.indexOf("Gender") !== -1){
				score += score_gender(csa_members[currPerson].gender, csa_members[cur].gender);
			}

			if(params.indexOf("Major") !== -1){

				score += score_major(csa_members[currPerson].major, csa_members[cur].major);
				
			}		
			if(params.indexOf("Grad Year") !== -1){
				score += score_grad_year(csa_members[currPerson].gradYear, csa_members[cur].gradYear);
			}
			if(params.indexOf("Diet") !== -1){
				score += score_diet(csa_members[currPerson].dietary, csa_members[cur].dietary);
			}
			if(params.indexOf("Partying") !== -1){
				score += score_spectrum(csa_members[currPerson].partying, csa_members[cur].partying, true);
			}
			if(params.indexOf("Spontaneity") !== -1){
				score += score_spectrum(csa_members[currPerson].spontan, csa_members[cur].spontan, true);
			}
			if(params.indexOf("Extraversion") !== -1){
				score += score_spectrum(csa_members[currPerson].trovert, csa_members[cur].trovert, true);
			}
			choices.push([score, cur])
			score =0;
		}
	}

	choices.sort(function(a,b){
		return b[0] - a[0]
	});
	console.log(choices)

	//console.log(Object.keys(csa_members).length)
}
//get_major("Computer SciEnce")