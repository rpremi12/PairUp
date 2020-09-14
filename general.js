

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



function hometownScore(obj, cp,  c){
	var temp = score_location(cp, c);

				if (temp < 1) {
					obj["notCommon"].push("Hometown: Not Near Each Other. ["  +cp.name +   "] [" + c.name + "]")
				}
				else{
					if(temp >= 1 && temp < 2){
					obj["inCommon"].push("Hometown: Same Region as each other (" + cp.region + "). ["+ cp.name +   "] [" + c.name + "]" )

					}
					else if(temp >=2 && temp <3){
						obj["inCommon"].push("Hometown: Within 50 Miles and Same Region as each other (" + cp.region + "). ["+ cp.name +   "] [" + c.name + "]" )
					   
					}
					else {
						obj["inCommon"].push("Hometown: Same Hometown, " + cp.name +".")
					}

				}
				obj["score"] += (temp/2)

}


function genderScore(obj, cp,c){
	var temp =  score_gender(cp, c);

	if (temp <= 0) {
		obj["notCommon"].push("Gender: Different Genders");
	}
	else{
		obj["inCommon"].push("Gender: Same Gender" );
	}
	obj["score"] += temp;
}

function majorScore(obj, cp,c){
	var temp = score_major(cp, c);

		if (temp <= 0) {
			obj["notCommon"].push("Major: Not Similar Majors at all, "+ cp.major + " and " + c.major +"." );
		}
		else{
			if(temp === 1){
				obj["inCommon"].push("Major: Same College as each other, " + cp.college + ". "+ cp.major + " and " + c.major +"." );
			}
			else {
				obj["inCommon"].push("Major: Same Major, " + cp.major+".")
			}
		}

		obj["score"] += temp;
}

function gradScore(obj,cp,c){

	var temp = score_grad_year(cp, c);
	var year1 = 2024-parseInt(cp.gradYear)
	var year2 = 2024-parseInt(c.gradYear)

	if (temp <= 0) {
		obj["notCommon"].push("Graduation Year: Wrong Age: "+ year1 + " and " + year2 );
	}
	else if (temp ===0.25){
		obj["inCommon"].push("Graduation Year: Same Graduation Year: "+ year1 + " and " + year2 );
	}
	else if (temp ===0.75){
		obj["inCommon"].push("Graduation Year: 2 Year Gap: "+year1 + " and " + year2);
	}				
	else {
		obj["inCommon"].push("Graduation: Close Age: " +  year1 + " and " + year2); 
	}
	obj["score"] += temp;
}

function specScore(obj, cp,c,nam){
	var temp=0
	if(nam=="Diet"){
		temp = score_diet(cp, c)
		if (temp <= 0) {
			obj["notCommon"].push("Diet: " + cp + " and "+ c +".")
		}
		else{
			obj["inCommon"].push("Diet: "  + cp + " and "+ c +"." );
		}
		console.log(temp)
	}
	else{
		temp = score_spectrum(cp,c,true)

		if (temp <= 0.6) {
			obj["notCommon"].push(nam+": " + cp+ " and "+ c +".")
		}
		else{
			obj["inCommon"].push(nam+": "  + cp+ " and "+ c+"." );
		}
	}
	
		obj["score"] += temp;
		console.log(obj);
				
}
function perScore(obj,cp,c){
	var temp = scorePerformance( cp, c)
	if(temp ===0.5 ){
		obj["inCommon"].push("Performance: Both Not Interested");
	}
	else if(temp > 0.5){
		obj["inCommon"].push("Performance: " + cp+ " and " + c)
	}
	else{
		obj["notCommon"].push("Performance: " + cp+ " and " + c)
	}
	obj["score"]+=temp;
}
function binScore(obj, cp,c,nam, o1, o2){

	var temp = binaryQuestions(o1, o2 , cp, c);
	if(temp >=0.25){
		obj["inCommon"].push(nam+": " + cp +" and " +c)
	}
	else{
		obj["notCommon"].push(nam+": " + cp +" and " + c)
	}
	obj["score"]+=temp;
}


function likesScore(obj, cpl,cpd,cl,cd, nam, n1, n2){
	var temps = score_likes_dislikes( cpl,cpd,cl,cd);
	//console.log(temps);

	if (temps[0].length === 0  && temps[1].length === 0  &&temps[2].length === 0  ) {
		obj["notCommon"].push(nam + " No commonalities <br>" + n1 + " Likes: "+ cpl+ " and  Dislikes:"+ cpd +". <br>"+ n2+ " Likes: "+ cl+ " and  Dislikes:"+ cd +"." )
	}
	else if (temps[2].length > 0 && temps[0].length === 0  && temps[1].length === 0 ){
		obj["notCommon"].push(nam + ": Disagress on " + temps[2] +"<br>" + n1 + " Likes: "+ cpl + " and  Dislikes:"+ cpd +". <br>"+ n2 + " Likes: "+ cl+ " and  Dislikes:"+ cd +"." )
	}

	else if (temps[2].length > 0 ){
		obj["notCommon"].push(nam+": Disagrees on " + temps[2] + ".")
	}

	if (temps[0].length > 0 && temps[1].length >0){
		obj["inCommon"].push(nam+": Commonalities " + temps[0]+ " and "+ temps[1] );
	}
	else if(temps[0].length >0 && temps[1].length ===  0){
		obj["inCommon"].push(nam+": Commonalities " + temps[0]+ "." );

	}
	else if(temps[0].length ===0 && temps[1].length>  0){
		obj["inCommon"].push(nam+": Commonalities " + temps[1]+ "." );

	}
	obj["score"] += temps[3];
}


function getScore(){

	var choices = [];

	if(params.length ===0 || currPerson === ""){
		return -1;
	}

	for( var cur in csa_members){
		if(cur !== currPerson &&  csa_members[currPerson].pairType !== csa_members[cur].pairType && csa_members[cur].paired ==="f"){

			var resObj = {
				"inCommon" : [],
				"notCommon" : [],
				"score" : 0
			}

			if(params.indexOf("Hometown") !== -1)
				hometownScore(resObj,csa_members[currPerson].hometown, csa_members[cur].hometown );
		
			if(params.indexOf("Gender") !== -1)
				genderScore(resObj, csa_members[currPerson].gender, csa_members[cur].gender)

			if(params.indexOf("Major") !== -1)
				majorScore(resObj, csa_members[currPerson].major, csa_members[cur].major)

			if(params.indexOf("Grad Year") !== -1)
				gradScore(resObj, csa_members[currPerson], csa_members[cur])

			if(params.indexOf("Diet") !== -1)
				specScore(resObj, csa_members[currPerson].dietary, csa_members[cur].dietary, "Diet")

			if(params.indexOf("Partying") !== -1)
				specScore(resObj, csa_members[currPerson].partying, csa_members[cur].partying, "Partying")

			if(params.indexOf("Spontaneity") !== -1)
				specScore(resObj,csa_members[currPerson].spontan, csa_members[cur].spontan, "Spontaneity")

			if(params.indexOf("Extraversion") !== -1)
				specScore(resObj,csa_members[currPerson].trovert, csa_members[cur].trovert, "Extraversion")

			if(params.indexOf("Games") !== -1)
				specScore(resObj,csa_members[currPerson].games, csa_members[cur].games, "Games")

			if(params.indexOf("Day vs. Night") !== -1)//{
				binScore(resObj, csa_members[currPerson].timeOfDay, csa_members[cur].timeOfDay, "Day", "Night")

			if(params.indexOf("Day Trip") !== -1)
				binScore(resObj,  csa_members[currPerson].dayTrip, csa_members[cur].dayTrip,"Mountain", "Beach")

			if(params.indexOf("Cats or Dogs?") !== -1)//{
				binScore(resObj, csa_members[currPerson].pets, csa_members[cur].pets,"Cats", "Dogs" )

			if(params.indexOf("Cereal") !== -1)
				binScore(resObj, csa_members[currPerson].cereal, csa_members[cur].cereal, "Cereal first", "Milk first" )

			if(params.indexOf("Shows & Movies") !== -1)
				likesScore(resObj, csa_members[currPerson].showLikes,csa_members[currPerson].showDislikes, csa_members[cur].showLikes,csa_members[cur].showDislikes, "Shows & Movies", currPerson,cur)

			if(params.indexOf("Sports") !== -1)
				likesScore(resObj, csa_members[currPerson].sportsLikes,csa_members[currPerson].sportsDislikes, csa_members[cur].sportsLikes,csa_members[cur].sportsDislikes, "Sports", currPerson,cur)

			if(params.indexOf("Music") !== -1)
				likesScore(resObj, csa_members[currPerson].musicLikes,csa_members[currPerson].musicDislikes, csa_members[cur].musicLikes,csa_members[cur].musicDislikes, "Music", currPerson,cur)

			if(params.indexOf("Video Games") !== -1)
				likesScore(resObj,csa_members[currPerson].gameLikes,csa_members[currPerson].gameDislikes, csa_members[cur].gameLikes,csa_members[cur].gameDislikes, "Video Games", currPerson, cur )
		
			if(params.indexOf("Performance")!=-1)
				perScore(resObj,  csa_members[currPerson].performance, csa_members[cur].performance)
			
			choices.push([resObj["score"], cur, resObj["inCommon"],resObj["notCommon"]])
		}
	}

	choices.sort(function(a,b){
		return b[0] - a[0]
	});
	choices.splice(0,0,  calcTotalScore());

	return choices;

}
