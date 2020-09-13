

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
	//	console.log("same major!")
		score +=1.1;
	}
	if(major_data[maj1.major.toUpperCase()].college ===major_data[maj2.major.toUpperCase()].college){
		//console.log("same college")
		score +=1;
	}
	return score;
}

function score_grad_year(person1, person2){

	var year1 = 2024-parseInt(person1.gradYear)

	var year2 = 2024-parseInt(person2.gradYear)

//	console.log(person1.pairType)
	if(person1.pairType === "Big"){
	//	console.log(year1, year2)
		if (year1 < year2){
			return -5;
		}
		else if ( year1 === year2){
			return 0.25;
		}
		else if (year1 -year2 == 2){
			return 0.75;
		}
		else if (year1-year2 ==3){
			return -4;
		}
		else{
			return 1;
		}

	}
	else{
		if (year1 >  year2){
			return -5;
		}
		else if ( year1 === year2){
			return 0.25;
		}
		else if (year2 -year1 == 2){
			return 0.75;
		}
		else if (year2-year1 >=3){
			return -4;
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
	if (close === true) return (1-(Math.abs( parseInt(score2)-parseInt(score1) )/10));
	else return (Math.abs( parseInt(score2)-parseInt(score1) ) )/10;
}

function convert_like_list(likes){
	likes = likes.replace(/&/, ",").replace(/, and/, ",").replace(/,and/, ",")
	if(likes.indexOf(",") != -1) likes.replace(/ and /, ",")

	var likes_list = (likes.split(",")).map(
							function(x){ 
								return (x.trim().toUpperCase().replace(/ /g, ""))
							});
	likes_list = likes_list.filter(
		function(x){
			if(x.length >0 && x != "N/A" && x != "NONE" ){
				return x;
			}
		});

	return likes_list;
}

function convert_test_list(likes){
	var formated = ["Both Like: ","Both Dislike: ","Disagrees On: "]
	for (var i =0; i < likes.length ; i++){

		if(likes[i].length ===0 ) {
			formated[i] ="";
			//console.log(likes.length)
			continue;
		}

		for (var j =0; j < likes[i].length; j ++){
				formated[i] +=  ( likes[i][j]+" , ")
		}
	}
	return formated
}

function score_likes_dislikes(like1, dislike1, like2, dislike2){

	var common= [[], [] , [] ] ;
	var score=0;

	//format data for processing
	//Converting all to (uppercase) String arrays

	var like1List = like1;
	var like2List = like2;

	var dislike1List = dislike1;
	var dislike2List = dislike2;

	/*
	console.log(like1List)
	console.log(like2List)
	console.log(dislike1List)
	console.log(dislike2List)*/

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
	//console.log()

	for (var i =0; i< dislike1List.length; i++){
		if(like2List.indexOf(dislike1List[i]) !== -1){
			score += -0.5;
			common[2].push(dislike1List[i]);
		}else if(dislike2List.indexOf(dislike1List[i]) !== -1){
			score += 0.5;
			common[1].push(dislike1List[i]);
		}
	}
	common = convert_test_list(common)
	common.push(score)

	return common;

}

function pair(key1, key2 ){
	csa_members[key1].paired = "t"
	csa_members[key1].who = csa_members[key2].name
	csa_members[key2].paired = "t"
	csa_members[key2].who = csa_members[key1].name

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

//	console.log(parsedMajor)
	return major_data[parsedMajor.toUpperCase()];
}

function cap_arr(arr){
	for (var i =0; i < arr.length; i ++){
		arr[i] = arr[i].toUpperCase();
	}
	return arr
}

function calcTotalScore(){
	var fin_score =0 ; 
	if (params.length === 0){
		return -1;
	}
	var to_nums = [3, 1, 2.1, 1,2,1, 1,1, 1]
	for (var items =0; items< params.length ; items++){
		if(to.indexOf(params[items]) !==-1 && to.indexOf(params[items]) < to.indexOf("Food & Drink")){
			fin_score += to_nums[to.indexOf(params[items])];
		}
	}
	return fin_score
}

function LikeFormatter(name){

}

function binaryQuestions(firstStr, secondStr, strToTest1, strToTest2){
	if(strToTest1 === firstStr &&strToTest2 === firstStr ){
		return 0.5
	}
	else if(strToTest1 === secondStr && strToTest2 === secondStr ){
		return 0.5
	}
	else if(strToTest1 === "Both" && strToTest2 === secondStr ){
		return 0.25
	}
	else if(strToTest1 === "Both" && strToTest2 === firstStr ){
		return 0.25
	}
	else if(strToTest2 === "Both" && strToTest1 === secondStr ){
		return 0.25
	}
	else if(strToTest2 === "Both" && strToTest1 === firstStr ){
		return 0.25
	}
	else if(strToTest2 === "Both" && strToTest1 === "Both" ){
		return 0.5
	}
	else{
		return 0;
	}
}

function scorePerformance(p1, p2){
	if(p1 === "None" && p2 === "None"){
		return 0.5;
	}
	if(p1 === "None" || p2 === "None"){
		return 0;
	}
	var tempScore =0;
	if(p1.indexOf("Take Out Kidz")!=-1 &&p2 .indexOf("Take Out Kidz")!=-1 ){
		tempScore+=2;
	}
    if(p1.indexOf("Harmonics")!=-1 &&p2 .indexOf("Harmonics")!=-1 ){
		tempScore+=2;
	}
	if(p1.indexOf("Lion Dance Team")!=-1 &&p2 .indexOf("Lion Dance Team")!=-1 ){
		tempScore+=2;
	}
	return tempScore
}

function getScore(){


	var score = 0;
	
	var temp=0;

	var choices = [];

	if(params.length ===0 || currPerson === ""){
		return -1;
	}


	for( var cur in csa_members){
		if(cur !== currPerson &&  csa_members[currPerson].pairType !== csa_members[cur].pairType && csa_members[cur].paired ==="f"){
			var inCommon = [];
			var notCommon = [];
			if(params.indexOf("Hometown") !== -1){
				temp = score_location(csa_members[currPerson].hometown, csa_members[cur].hometown);
			//	console.log("CurrPerson: " + csa_members[currPerson].hometown +   "Next Person: " + csa_members[cur].hometown +" | ")
			//	console.log(temp)
				if (temp < 1) {
					notCommon.push("Hometown: Not Near Each Other. ["  +csa_members[currPerson].hometown.name +   "] [" + csa_members[cur].hometown.name + "]")
				}
				else{
					if(temp >= 1 && temp < 2){
					inCommon.push("Hometown: Same Region as each other (" + csa_members[currPerson].hometown.region + "). ["+ csa_members[currPerson].hometown.name +   "] [" + csa_members[cur].hometown.name + "]" )

					}
					else if(temp >=2 && temp <3){
						inCommon.push("Hometown: Within 50 Miles and Same Region as each other (" + csa_members[currPerson].hometown.region + "). ["+ csa_members[currPerson].hometown.name +   "] [" + csa_members[cur].hometown.name + "]" )
					   
					}
					else {
						inCommon.push("Hometown: Same Hometown, " + csa_members[currPerson].hometown.name +".")
					}

				}
				score += (temp/2)
			}

			if(params.indexOf("Gender") !== -1){
				var temp =  score_gender(csa_members[currPerson].gender, csa_members[cur].gender);
				if (temp <= 0) {
					notCommon.push("Gender: Different Genders");
				}
				else{
					inCommon.push("Gender: Same Gender" );
				}
				score += temp;
			}

			if(params.indexOf("Major") !== -1){
				//console.log(csa_members[currPerson], csa_members[cur])
				var temp = score_major(csa_members[currPerson].major, csa_members[cur].major);

				if (temp <= 0) {
					notCommon.push("Major: Not Similar Majors at all, "+ csa_members[currPerson].major.major + " and " + csa_members[cur].major.major +"." );
				}
				else{
					if(temp === 1){
						inCommon.push("Major: Same College as each other, " + csa_members[currPerson].major.college + ". "+ csa_members[currPerson].major.major + " and " + csa_members[cur].major.major +"." );
					}
					else {
						inCommon.push("Major: Same Major, " + csa_members[currPerson].major.major+".")
					}
				}

				score += temp;
			}		
			if(params.indexOf("Grad Year") !== -1){
				var temp = score_grad_year(csa_members[currPerson], csa_members[cur]);
				var year1 = 2024-parseInt(csa_members[currPerson].gradYear)
				var year2 = 2024-parseInt(csa_members[cur].gradYear)
				if (temp <= 0) {
					notCommon.push("Graduation Year: Wrong Age: "+ year1 + " and " + year2 );
				}
				else if (temp ===0.25){
					inCommon.push("Graduation Year: Same Graduation Year: "+ year1 + " and " + year2 );
				}
				else if (temp ===0.75){
					inCommon.push("Graduation Year: 2 Year Gap: "+year1 + " and " + year2);
				}				
				else {
					inCommon.push("Graduation: Close Age: " +  year1 + " and " + year2); 
				}
				score += temp;
			}
			if(params.indexOf("Diet") !== -1){
				var temp =  score_diet(csa_members[currPerson].dietary, csa_members[cur].dietary);
				if (temp <= 0) {
					notCommon.push("Diet: " + csa_members[currPerson].dietary + " and "+ csa_members[cur].dietary +".")
				}
				else{
					inCommon.push("Diet: "  + csa_members[currPerson].dietary + " and "+ csa_members[cur].dietary +"." );
				}
				score += temp;
			}


			if(params.indexOf("Partying") !== -1){
				var temp = score_spectrum(csa_members[currPerson].partying, csa_members[cur].partying, true);
				//console.log("Partying: " + temp)
				if (temp <= 0.6) {
					notCommon.push("Partying: " + csa_members[currPerson].partying+ " and "+ csa_members[cur].partying +".")
				}
				else{
					inCommon.push("Partying: "  + csa_members[currPerson].partying+ " and "+ csa_members[cur].partying +"." );
				}
				score += temp;

			}
			if(params.indexOf("Spontaneity") !== -1){
				var temp = score_spectrum(csa_members[currPerson].spontan, csa_members[cur].spontan, true);
				if (temp <= 0.6) {
					notCommon.push("Spontaneity: " + csa_members[currPerson].spontan+ " and "+ csa_members[cur].spontan +".")
				}
				else{
					inCommon.push("Spontaneity: "  + csa_members[currPerson].spontan+ " and "+ csa_members[cur].spontan +"." );
				}
				score += temp;
			}
			if(params.indexOf("Extraversion") !== -1){
				var temp = score_spectrum(csa_members[currPerson].trovert, csa_members[cur].trovert, true);
				if (temp <= 0.6) {
					notCommon.push("Extraversion: " + csa_members[currPerson].trovert+ " and "+ csa_members[cur].trovert +".")
				}
				else{
					inCommon.push("Extraversion:"  + csa_members[currPerson].trovert+ " and "+ csa_members[cur].trovert +"." );
				}
				score += temp;
			}


			if(params.indexOf("Games") !== -1){
				var temp = score_spectrum(csa_members[currPerson].games, csa_members[cur].games, true);
				if (temp <= 0.6) {
					notCommon.push("Games: " + csa_members[currPerson].games+ " and "+ csa_members[cur].games +".")
				}
				else{
					inCommon.push("Games: "  + csa_members[currPerson].games+ " and "+ csa_members[cur].games +"." );
				}
				score += temp;
			}


			var show_multi = 1;
			var sports_multi =1;
			var music_multi =1;
			var games_multi =1;

			var indexToCheck ="";
			indexToCheck = "Shows & Movies";
			if(params.indexOf(indexToCheck) !== -1){
				var p1 = csa_members[currPerson].showRating ;
				var p2 =  csa_members[cur].showRating;
				var temp = score_spectrum(p1, p2, true);
				if (temp <= 0.7) {
					notCommon.push(indexToCheck+": " + p1+ " and "+ p2 +".")
				}
				else{
					inCommon.push(indexToCheck+ ": "  + p1+ " and "+ p2 +"." );
				}
				show_multi += (0.4-temp)*2
				//console.log(temp)
				score += temp;
			}

			indexToCheck = "Sports";
			if(params.indexOf(indexToCheck) !== -1){
				var p1 = csa_members[currPerson].sportsRating ;
				var p2 =  csa_members[cur].sportsRating;
				var temp = score_spectrum(p1, p2, true);
				if (temp <= 0.7) {
					notCommon.push(indexToCheck+": " + p1+ " and "+ p2 +".")
				}
				else{
					inCommon.push(indexToCheck+ ": "  + p1+ " and "+ p2 +"." );
				}
				sports_multi += (0.4-temp)*2
				score += temp;
			}


			indexToCheck = "Music";
			if(params.indexOf(indexToCheck) !== -1){
				var p1 = csa_members[currPerson].musicRating ;
				var p2 =  csa_members[cur].musicRating;
				var temp = score_spectrum(p1, p2, true);
				if (temp <= 0.7) {
					notCommon.push(indexToCheck+": " + p1+ " and "+ p2 +".")
				}
				else{
					inCommon.push(indexToCheck+ ": "  + p1+ " and "+ p2 +"." );
				}
				music_multi += (0.4-temp)*2;
				score += temp;
			}

			indexToCheck = "Video Games";
			if(params.indexOf(indexToCheck) !== -1){
				var p1 = csa_members[currPerson].gameRating ;
				var p2 =  csa_members[cur].gameRating;
				var temp = score_spectrum(p1, p2, true);
				if (temp <= 0.7) {
					notCommon.push(indexToCheck+": " + p1+ " and "+ p2 +".")
				}
				else{
					inCommon.push(indexToCheck+ ": "  + p1+ " and "+ p2 +"." );
				}
				games_multi += (0.4-temp)*2
				score += temp;
			}

			if(params.indexOf("Performance")!=-1){
				var temp = scorePerformance( csa_members[currPerson].performance, csa_members[cur].performance)
				if(temp ===0.5 ){
					inCommon.push("Performance: Both Not Interested");
				}
				else if(temp > 0.5){
					inCommon.push("Performance: " + csa_members[currPerson].performance+ " and " + csa_members[cur].performance);
				}
				else{
					notCommon.push("Performance: " + csa_members[currPerson].performance+ " and " + csa_members[cur].performance);
				}
				score+=temp;
			}







			if(params.indexOf("Day vs. Night") !== -1){
				var temp = binaryQuestions("Day", "Night" , csa_members[currPerson].timeOfDay, csa_members[cur].timeOfDay);
				if(temp >=0.25){
					inCommon.push("Day vs. Night: " + csa_members[currPerson].timeOfDay +" and " +csa_members[cur].timeOfDay)
				}
				else{
					notCommon.push("Day vs. Night: " + csa_members[currPerson].timeOfDay +" and " +csa_members[cur].timeOfDay)
				}
				score+=temp;
			}


			if(params.indexOf("Day Trip") !== -1){
				var temp = binaryQuestions("Mountain", "Beach" , csa_members[currPerson].dayTrip, csa_members[cur].dayTrip);
				if(temp >=0.25){
					inCommon.push("Day Trip: " + csa_members[currPerson].dayTrip +" and " +csa_members[cur].dayTrip)
				}
				else{
					notCommon.push("Day Trip: " + csa_members[currPerson].dayTrip +" and " +csa_members[cur].dayTrip)
				}
				score+=temp;

			}
			//console.log(params);
			if(params.indexOf("Cats or Dogs?") !== -1){
				var temp = binaryQuestions("Cats", "Dogs" , csa_members[currPerson].pets, csa_members[cur].pets);
				if(temp >=0.25){
					inCommon.push("Cats or Dogs: " + csa_members[currPerson].pets +" and " +csa_members[cur].pets)
				}
				else{
					notCommon.push("Cats or Dogs: " + csa_members[currPerson].pets +" and " +csa_members[cur].pets)
				}				
				score+=temp;

			}		
			
			if(params.indexOf("Cereal") !== -1){
				var temp = binaryQuestions("Cereal first", "Milk first" , csa_members[currPerson].cereal, csa_members[cur].cereal);
				if(temp >=0.25){
					inCommon.push("Cereal: " + csa_members[currPerson].cereal +" and " +csa_members[cur].cereal)
				}
				else{
					notCommon.push("Cereal: " + csa_members[currPerson].cereal +" and " +csa_members[cur].cereal)
				}
				score+=temp;

			}	









			if(params.indexOf("Shows & Movies") !== -1){
				var temps = score_likes_dislikes(csa_members[currPerson].showLikes,csa_members[currPerson].showDislikes, csa_members[cur].showLikes,csa_members[cur].showDislikes);
				//console.log(temps);

				if (temps[0].length === 0  && temps[1].length === 0  &&temps[2].length === 0  ) {
					notCommon.push("TV & Movies: No commonalities <br>" + currPerson + " Likes: "+ csa_members[currPerson].showLikes+ " and  Dislikes:"+ csa_members[currPerson].showDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].showLikes+ " and  Dislikes:"+ csa_members[cur].showDislikes +"." )
				}
				else if (temps[2].length > 0 && temps[0].length === 0  && temps[1].length === 0 ){
					notCommon.push("TV & Movies: Disagress on " + temps[2] +"<br>" + currPerson + " Likes: "+ csa_members[currPerson].showLikes+ " and  Dislikes:"+ csa_members[currPerson].showDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].showLikes+ " and  Dislikes:"+ csa_members[cur].showDislikes +"." )
				}

				else if (temps[2].length > 0 ){
					notCommon.push("TV & Movies: Disagrees on " + temps[2] + ".")
				}

				if (temps[0].length > 0 && temps[1].length >0){
					inCommon.push("TV & Movies: Commonalities " + temps[0]+ " and "+ temps[1] );
				}
				else if(temps[0].length >0 && temps[1].length ===  0){
					inCommon.push("TV & Movies: Commonalities " + temps[0]+ "." );

				}
				else if(temps[0].length ===0 && temps[1].length>  0){
					inCommon.push("TV & Movies: Commonalities " + temps[1]+ "." );

				}
				score += temps[3];
			}

			if(params.indexOf("Sports") !== -1){
				var temps = score_likes_dislikes(csa_members[currPerson].sportsLikes,csa_members[currPerson].sportsDislikes, csa_members[cur].sportsLikes,csa_members[cur].sportsDislikes);
			//	console.log(temps);

				if (temps[0].length === 0  && temps[1].length === 0  &&temps[2].length === 0  ) {
					notCommon.push("Sports: No commonalities <br>" + currPerson + " Likes: "+ csa_members[currPerson].sportsLikes+ " and  Dislikes:"+ csa_members[currPerson].sportsDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].sportsLikes+ " and  Dislikes:"+ csa_members[cur].sportsDislikes +"." )
				}
				else if (temps[2].length > 0 && temps[0].length === 0  && temps[1].length === 0 ){
					notCommon.push("Sports: Disagress on " + temps[2]+ "<br>" + currPerson + " Likes: "+ csa_members[currPerson].sportsLikes+ " and  Dislikes:"+ csa_members[currPerson].sportsDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].sportsLikes+ " and  Dislikes:"+ csa_members[cur].sportsDislikes +"." )
				}

				else if (temps[2].length > 0 ){
					notCommon.push("Sports: Disagrees on " + temps[2] + ".")
				}

				if (temps[0].length > 0 && temps[1].length >0){
					inCommon.push("Sports: Commonalities " + temps[0]+ " and "+ temps[1] );
				}
				else if(temps[0].length >0 && temps[1].length ===  0){
					inCommon.push("Sports: Commonalities " + temps[0]+ "." );

				}
				else if(temps[0].length ===0 && temps[1].length>  0){
					inCommon.push("Sports: Commonalities " + temps[1]+ "." );

				}
				score += temps[3];
			}

			if(params.indexOf("Music") !== -1){
				var temps = score_likes_dislikes(csa_members[currPerson].musicLikes,csa_members[currPerson].musicDislikes, csa_members[cur].musicLikes,csa_members[cur].musicDislikes);
			//	console.log(temps);

				if (temps[0].length === 0  && temps[1].length === 0  &&temps[2].length === 0  ) {
					notCommon.push("Music: No commonalities <br>" + currPerson + " Likes: "+ csa_members[currPerson].musicLikes+ " and  Dislikes:"+ csa_members[currPerson].musicDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].musicLikes+ " and  Dislikes:"+ csa_members[cur].musicDislikes +"." )
				}
				else if (temps[2].length > 0 && temps[0].length === 0  && temps[1].length === 0 ){
					notCommon.push("Music: Disagress on " + temps[2]+ "<br>" + currPerson + " Likes: "+ csa_members[currPerson].musicLikes+ " and  Dislikes:"+ csa_members[currPerson].musicDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].musicLikes+ " and  Dislikes:"+ csa_members[cur].musicDislikes +"." )
				}

				else if (temps[2].length > 0 ){
					notCommon.push("Music: Disagrees on " + temps[2] + ".")
				}

				if (temps[0].length > 0 && temps[1].length >0){
					inCommon.push("Music: Commonalities " + temps[0]+ " and "+ temps[1] );
				}
				else if(temps[0].length >0 && temps[1].length ===  0){
					inCommon.push("Music: Commonalities " + temps[0]+ "." );

				}
				else if(temps[0].length ===0 && temps[1].length>  0){
					inCommon.push("Music: Commonalities " + temps[1]+ "." );

				}
				score += temps[3];
			}

			if(params.indexOf("Video Games") !== -1){
				var temps = score_likes_dislikes(csa_members[currPerson].gameLikes,csa_members[currPerson].gameDislikes, csa_members[cur].gameLikes,csa_members[cur].gameDislikes);
			//	console.log(temps);

				if (temps[0].length === 0  && temps[1].length === 0  &&temps[2].length === 0  ) {
					notCommon.push("Video Games: No commonalities <br>" + currPerson + " Likes: "+ csa_members[currPerson].gameLikes+ " and  Dislikes:"+ csa_members[currPerson].gameDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].gameLikes+ " and  Dislikes:"+ csa_members[cur].gameDislikes +"." )
				}
				else if (temps[2].length > 0 && temps[0].length === 0  && temps[1].length === 0 ){
					notCommon.push("Video Games: Disagress on " + temps[2]+ "<br>" + currPerson + " Likes: "+ csa_members[currPerson].gameLikes+ " and  Dislikes:"+ csa_members[currPerson].gameDislikes +". <br>"+cur + " Likes: "+ csa_members[cur].gameLikes+ " and  Dislikes:"+ csa_members[cur].gameDislikes +"." )
				}

				else if (temps[2].length > 0 ){
					notCommon.push("Video Games: Disagrees on " + temps[2] + ".")
				}

				if (temps[0].length > 0 && temps[1].length >0){
					inCommon.push("Video Games: Commonalities " + temps[0]+ " and "+ temps[1] );
				}
				else if(temps[0].length >0 && temps[1].length ===  0){
					inCommon.push("Video Games: Commonalities " + temps[0]+ "." );

				}
				else if(temps[0].length ===0 && temps[1].length>  0){
					inCommon.push("Video Games: Commonalities " + temps[1]+ "." );

				}
				score += temps[3];
			}

		

			choices.push([score, cur, inCommon, notCommon])
			score =0;
		}
	}

	choices.sort(function(a,b){
		return b[0] - a[0]
	});
	choices.splice(0,0,  calcTotalScore());
//	console.log(choices)
	return choices;

	//console.log(Object.keys(csa_members).length)
}
//get_major("Computer SciEnce")