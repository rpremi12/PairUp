//import { $ } from 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
//Contains attributes about people's locations.
class Location{
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

//Convert name for form parsing
function town_format(t_name){
	return t_name.replace(/ /g, "+");
}
//Determine the region of the person
function region(address, lat, lng){

	var places = address.split(", ");
	if(places[1] == 'CA'){
		if(lat >34.3 && lat <36.74){
			return "Centeral Cal";
		}
		else if (lat <34.3){
			return "SoCal";
		}
		else{
			return "NorCal";
		}
	}
	else if(places[2] =='USA'){
		return ("Out of State" );
	}
	else{
		return "International";
	}

}

//calculate estimated distance between two people's location
//NOTE: Google does have an API that does this as well. But this is faster and also free...
function distance_calc(loc1, loc2){
	return getDistanceFromLatLonInKm(loc1.lat, loc1.lng, loc2.lat, loc2.lng);
}
//helper function for get distance
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c* 0.6213712; // Distance in Miles
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function score_location(loc1, loc2){
	var score = 0;
	var distance = distance_calc(loc1, loc2);
	if (loc1.region == loc2.region){
		//console.log("Same Region:", loc1.region)
		score++;
	}

	if(distance <=50){
		//console.log("Wow they are within 50 Miles of each other")
		score++;
		score += (50-distance)/50
		if(score ==3){
			//console.log("They are from the same city!")
		}
	}
	console.log("Final Score: ", score)
	return score

}

//Testing function. 
function test_pls(){
	var n1 = new Location("San Jose")
	var n2 = new Location("San Jose")
	//console.log(n1.name, n1.lat, n1.lng, n1.region)
	console.log(JSON.stringify(n1))
	console.log(JSON.stringify(n2))
	score_location(n1,n2)
}
