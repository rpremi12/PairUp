//import { $ } from 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
//Contains attributes about people's locations.
class Location{
	constructor(name){
		/*var jquery = document.createElement('script');
		jquery.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
		jquery.type = 'text/javascript'*/

		//Look up the 
		/*var xmlHttp = new XMLHttpRequest({mozSystem: true});
		xmlHttp.open( "GET","https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format(name)+"&key=",false);
		xmlHttp.send(null);
		console.log(xmlHttp.responseText);*/

		//Accquire Json with information about their hometown.

		const lookup = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+town_format("Portland, OR, USA")+"&key="
 		console.log(lookup);

 		const parsed = name;

 		//Setup classe's attributes
		this.name = parsed.results[0].formatted_address;
		this.lat = parsed.results[0].geometry.location.lat;
		this.lng = parsed.results[0].geometry.location.lng;
		this.region = region(this.name, this.lat, this.lng);

        }

 	
 	/*	$.ajax({
		url: lookup,
		type: "GET",
		dataType: "json",
		headers:{
	
	'Access-Control-Allow-Origin': "https://maps.googleapis.com"
		},
		success: function (data) {
		    console.log(data);
		}
		});
 	}*/
/*
 		var data = {}
 		$.getJson(lookup, function(response){
 			console.log(response)
 		})

}*/
 		/*
 		var request = new XMLHttpRequest();
		request.open('GET', lookup, true);
		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!
		    console.log("ugh")
		    console.log(request.responseText);
		     data = JSON.parse(request.responseText);
		  } else {
		  	console.log("ugh off")
		    // We reached our target server, but it returned an error

		  }
		}}*/

};


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


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

//calculate distance between two people's location
function distance_calc(loc1, loc2){
	return getDistanceFromLatLonInKm(loc1.lat, loc1.lng, loc2.lat, loc2.lng);
}
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c* 0.6213712; // Distance in km
  return d;
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

//GetJson 
function g_json(){
	return {
	   "html_attributions" : [],
	   "results" : [
	      {
	         "formatted_address" : "Portland, OR, USA",
	         "geometry" : {
	            "location" : {
	               "lat" : 45.5154586,
	               "lng" : -122.6793461
	            },
	            "viewport" : {
	               "northeast" : {
	                  "lat" : 45.65288049999999,
	                  "lng" : -122.472024
	               },
	               "southwest" : {
	                  "lat" : 45.4325358,
	                  "lng" : -122.8367493
	               }
	            }
	         },
	         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
	         "id" : "a4bab2d2863eff36d4e6bd34db32ba7a3b000b22",
	         "name" : "Portland",
	         "photos" : [
	            {
	               "height" : 3205,
	               "html_attributions" : [
	                  "\u003ca href=\"https://maps.google.com/maps/contrib/116762854930395036579/photos\"\u003eAndrew Gregor\u003c/a\u003e"
	               ],
	               "photo_reference" : "CmRaAAAAUjGQS9_fKg44CAhmk8HDsBc9zSeN6Wf0zICepasrveLlDF_IaeoZVs35i7xDc0HdL-gCbGLWWQHwMyopC7vfveihUVh1tXG5W8IEt1O9qn7rdvYlEwQfc3H5bBJXaoRaEhCGklnQj9YsPxMLxRQ8JMtFGhRIdSv-AMdvH6sgczPexf_jrC_Fiw",
	               "width" : 4807
	            }
	         ],
	         "place_id" : "ChIJJ3SpfQsLlVQRkYXR9ua5Nhw",
	         "reference" : "ChIJJ3SpfQsLlVQRkYXR9ua5Nhw",
	         "types" : [ "locality", "political" ]
	      }
	   ],
	   "status" : "OK"
	};
}
function g_json2(){
return {
   "html_attributions" : [],
   "results" : [
      {
         "formatted_address" : "San Jose, CA, USA",
         "geometry" : {
            "location" : {
               "lat" : 37.3382082,
               "lng" : -121.8863286
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 37.4692304,
                  "lng" : -121.589154
               },
               "southwest" : {
                  "lat" : 37.124493,
                  "lng" : -122.0456719
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
         "id" : "c00d0e6ed23a5a6b418841457b33c47430a93a4c",
         "name" : "San Jose",
         "photos" : [
            {
               "height" : 2448,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104500663303866676451/photos\"\u003eA Google User\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAuJDoU2a9Bi_sa5C2YhaP-Bq-ZoNqadO8XrVdfkc2s_3Hq952dpetEchKRnLut6oDccyAy5haOqZcFXjGhhLhhq2K7nFTxqx5wAwyd4eZeypWjiDa008IUhHMux6rK5AHEhDbsAFtgsBhHepDTZayUgvwGhTcnWZz6UXSvXimT1wvUbYY7zJ96Q",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJ9T_5iuTKj4ARe3GfygqMnbk",
         "reference" : "ChIJ9T_5iuTKj4ARe3GfygqMnbk",
         "types" : [ "locality", "political" ]
      }
   ],
   "status" : "OK"
}
}
//Testing function. 
function test_pls(){
	var n1 = new Location(g_json2())
	var n2 = new Location(g_json())
	console.log(n1.name, n1.lat, n1.lng, n1.region)
	console.log(distance_calc(n1,n2))
}


function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}