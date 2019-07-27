class Location{
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

}

//Determines which college is in based on major
//Returns string if it is a valid major
//Returns string 
function get_college(major){
	major = major.toUpperCase()
		//College of Agriculture

	var majors = {}
	//Agricultural Communication'
	majors['Agricultural Communication'] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Com'] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Coms'] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Comms'] = {major: "Agricultural Communication", college: "College of Agriculture"}
	//Agricultural and Environmental Plant Sciences
	majors['Agricultural and Environmental Plant Sciences'] = {major: "Agricultural and Environmental Plant Sciences", college: "College of Agriculture"}
	majors['AEPS'] = {major: "Agricultural and Environmental Plant Sciences", college: "College of Agriculture"}
	//Wine and Viticulture
	majors['Wine and Viticulture'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Wine'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Viticulture'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Vito'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Wine and Vito'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['WV'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['W&V'] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	//Agricultural Science
	majors['Agricultural Science'] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['Agricultural Sci'] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['AgSci'] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['Ag Sci'] = {major: "Agricultural Science", college: "College of Agriculture"}
	//Agricultural Sysstems Management
	majors['Agricultural Systems Management'] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	majors['ASM'] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	majors['Ag Systems Management'] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	//Animal Science
	majors['Animal Science'] = {major: "Animal Science", college: "College of Agriculture"}
	majors['Animal Sci'] = {major: "Animal Science", college: "College of Agriculture"}
	majors['Ani Sci'] = {major: "Animal Science", college: "College of Agriculture"}
	//Bioresource and Agricultural Engineering
	majors['Bioresource and Agricultural Engineering'] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Bioresource'] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Agricultural Engineering'] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Ag Engineering'] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['BRAE'] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	//Dairy Science
	majors['Dairy Science'] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['Dairy'] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['Dairy Sci'] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['DairySci'] = {major: "Dairy Science", college: "College of Agriculture"}
	//Environmental Earth and Soil Sciences
	majors['Environmental Earth and Soil Sciences'] = {major: "Environmental Earth and Soil Sciences", college: "College of Agriculture"}
	majors['EESS'] = {major: "Environmental Earth and Soil Sciences", college: "College of Agriculture"}
	//
	majors['Environmental Management and Protection'] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	majors['EMP'] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	majors['Environmental Management'] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	//
	majors['Food Science'] = {major: "Food Science", college: "College of Agriculture"}
	majors['FS'] = {major: "Food Science", college: "College of Agriculture"}
	majors['FoodSci'] = {major: "Food Science", college: "College of Agriculture"}
	majors['Food Sci'] = {major: "Food Science", college: "College of Agriculture"}
	majors['Food'] = {major: "Food Science", college: "College of Agriculture"}

	var c_agr = cap_arr([
		"Agricultural Communication",
	    "Agricultural and Environmental Plant Sciences",
	    "Wine and Viticulture",
	    "Agricultural Science",
	    "Agricultural Systems Management",
	    "Animal Science",
	    "Bioresource and Agricultural Engineering",
	    "Dairy Science",
	    "Environmental Earth and Soil Sciences",
	    "Environmental Management and Protection",
	    "Food Science",
	    "Forestry and Natural Resources",
	    "Nutrition",
	    "Recreation, Parks, and Tourism Administration",
	    "Agricultural Business"
	]);

    //College of Arch
    var c_arc = cap_arr([
	    "Architectural Engineering",
	    "Architecture",
	    "City and Regional Planning",
	    "Construction Management",
	    "Landscape Architecture"
	]);
	//College of Engineering
    var c_eng = cap_arr([
	    "Aerospace Engineering",
	    "Biomedical Engineering",
	    "Civil Engineering",
	    "Comparative Ethnic Studies",
	    "Computer Engineering",
	    "Computer Science",
	    "Electrical Engineering",
	    "Environmental Engineering",
	    "General Engineering",
	    "Industrial Engineering",
	    "Manufacturing Engineering",
	    "Materials Engineering",
	    "Mechanical Engineering",
	    "Software Engineering"
    ]);
    //College of Liberal Arts
    var c_lib = cap_arr([
	    "Theatre Arts",
	    "Anthropology and Geography",
	    "Art and Design",
	    "Child Development",
	    "Comparative Ethnic Studies",
	    "Communication Studies",
	    "English",
	    "Graphic Communication",
	    "History",
	    "Journalism",
	    "Modern Languages and Literatures",
	    "Music",
	    "Philosophy",
	    "Political Science",
	    "Psychology",
	    "Sociology"
    ]);

    //College of Science and Math (COSAM)
    var c_sam = cap_arr([
	    "Biochemistry",
	    "Biological Sciences",
	    "Chemistry",
	    "Kinesiology",
	    "Liberal Studies",
	    "Marine Sciences",
	    "Mathematics",
	    "Microbiology",
	    "Physics",
	    "Statistics",
	    "Public Health"
    ]);

    //College of Business
    var c_bus = cap_arr([
	   "Business Administration",
	   "Economics",
	   "Industrial Technology and Packaging"
    ]);

    console.log((c_agr.indexOf(major)))
    console.log((c_eng.indexOf(major)))

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