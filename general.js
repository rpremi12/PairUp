class person_location{
	constructor(name){
		//Accquire Json with information about their hometown.
		const lookup = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format("Portland, OR, USA")+"&key=AIzaSyC2IEns_det_bOpV_Nqw1iPAfSScTqWyYQ"

		//Locate the City by name through Google Maps API
		var xmlHttp = new XMLHttpRequest({mozSystem: true});
		xmlHttp.open( "GET","https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format(name)+"&key=AIzaSyC2IEns_det_bOpV_Nqw1iPAfSScTqWyYQ",false);
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
	if(major_data[maj1.toUpperCase()].major ===major_data[maj2.toUpperCase()].major){
		console.log("same major!")
		score +=1.1;
	}
	if(major_data[maj1.toUpperCase()].college ===major_data[maj2.toUpperCase()].college){
		console.log("different major!s")
		score +=1;
	}
	return score;
}

//Determines which college is in based on major
//Returns string if it is a valid major
//Returns string 
function get_major(major){
	major = major.toUpperCase()
		//College of Agriculture


   // console.log((c_agr.indexOf(major)))
  //  console.log((c_eng.indexOf(major)))

	console.log(major_data[major])
    if (c_agr.indexOf(major) !=-1){
    	return "College of Agriculture, Food and Environmental Sciences";
    }
    else if (c_arc.indexOf(major) !=-1){
    	return "College of Architecture and Environmental Design";
    }


}

function cap_arr(arr){
	for (var i =0; i < arr.length; i ++){
		arr[i] = arr[i].toUpperCase();
	}
	return arr
}

get_college("Computer SciEnce")