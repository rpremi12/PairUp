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
    

    var c_eng = cap_arr([
	    "Aerospace Engineering",
	    "Biomedical Engineering",
	    "Civil Engineering",
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

    var majors = {}
	//Agricultural Communication'
	majors['Agricultural Communication'.toUpperCase()] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Com'.toUpperCase()] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Coms'.toUpperCase()] = {major: "Agricultural Communication", college: "College of Agriculture"}
	majors['Ag Comms'.toUpperCase()] = {major: "Agricultural Communication", college: "College of Agriculture"}
	//Agricultural and Environmental Plant Sciences
	majors['Agricultural and Environmental Plant Sciences'.toUpperCase()] = {major: "Agricultural and Environmental Plant Sciences", college: "College of Agriculture"}
	majors['AEPS'.toUpperCase()] = {major: "Agricultural and Environmental Plant Sciences", college: "College of Agriculture"}
	//Wine and Viticulture
	majors['Wine and Viticulture'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Wine and Viticulture'.toUpperCase()] = {major: "Wine & Viticulture", college: "College of Agriculture"}
	majors['Wine'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Viticulture'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Vito'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['Wine and Vito'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['WV'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	majors['W&V'.toUpperCase()] = {major: "Wine and Viticulture", college: "College of Agriculture"}
	//Agricultural Science
	majors['Agricultural Science'.toUpperCase()] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['Agricultural Sci'.toUpperCase()] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['AgSci'.toUpperCase()] = {major: "Agricultural Science", college: "College of Agriculture"}
	majors['Ag Sci'.toUpperCase()] = {major: "Agricultural Science", college: "College of Agriculture"}
	//Agricultural Sysstems Management
	majors['Agricultural Systems Management'.toUpperCase()] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	majors['ASM'.toUpperCase()] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	majors['Ag Systems Management'.toUpperCase()] = {major: "Agricultural Systems Management", college: "College of Agriculture"}
	//Animal Science
	majors['Animal Science'.toUpperCase()] = {major: "Animal Science", college: "College of Agriculture"}
	majors['Animal Sci'.toUpperCase()] = {major: "Animal Science", college: "College of Agriculture"}
	majors['Ani Sci'.toUpperCase()] = {major: "Animal Science", college: "College of Agriculture"}
	//Bioresource and Agricultural Engineering
	majors['Bioresource and Agricultural Engineering'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Bioresource & Agricultural Engineering'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Bioresource'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Agricultural Engineering'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['Ag Engineering'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	majors['BRAE'.toUpperCase()] = {major: "Bioresource and Agricultural Engineering", college: "College of Agriculture"}
	//Dairy Science
	majors['Dairy Science'.toUpperCase()] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['Dairy'.toUpperCase()] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['Dairy Sci'.toUpperCase()] = {major: "Dairy Science", college: "College of Agriculture"}
	majors['DairySci'.toUpperCase()] = {major: "Dairy Science", college: "College of Agriculture"}
	//Environmental Earth and Soil Sciences
	majors['Environmental Earth and Soil Sciences'.toUpperCase()] = {major: "Environmental Earth and Soil Sciences", college: "College of Agriculture"}
	majors['Environmental Earth & Soil Sciences'.toUpperCase()] = {major: "Environmental Earth and Soil Sciences", college: "College of Agriculture"}
	majors['EESS'.toUpperCase()] = {major: "Environmental Earth and Soil Sciences", college: "College of Agriculture"}
	//Environmental Management and Protection
	majors['Environmental Management and Protection'.toUpperCase()] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	majors['Environmental Management & Protection'.toUpperCase()] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	majors['EMP'.toUpperCase()] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	majors['Environmental Management'.toUpperCase()] = {major: "Environmental Management and Protection", college: "College of Agriculture"}
	//Food Science
	majors['Food Science'.toUpperCase()] = {major: "Food Science", college: "College of Agriculture"}
	majors['FS'.toUpperCase()] = {major: "Food Science", college: "College of Agriculture"}
	majors['FoodSci'.toUpperCase()] = {major: "Food Science", college: "College of Agriculture"}
	majors['Food Sci'.toUpperCase()] = {major: "Food Science", college: "College of Agriculture"}
	majors['Food'.toUpperCase()] = {major: "Food Science", college: "College of Agriculture"}
	//Forestry and Natural Resources
	majors['Forestry and Natural Resources'.toUpperCase()] = {major: "Forestry and Natural Resources", college: "College of Agriculture"}
	majors['Forestry & Natural Resources'.toUpperCase()] = {major: "Forestry and Natural Resources", college: "College of Agriculture"}
	majors['FNR'.toUpperCase()] = {major: "Forestry and Natural Resources", college: "College of Agriculture"}
	majors['Forestry'.toUpperCase()] = {major: "Forestry and Natural Resources", college: "College of Agriculture"}
	majors['Natural Resources'.toUpperCase()] = {major: "Forestry and Natural Resources", college: "College of Agriculture"}
	//Nutrition
	majors['Nutrition'.toUpperCase()] = {major: "Nutrition", college: "College of Agriculture"}
	//Recreation, Parks, and Tourism Administration
	majors['Recreation, Parks, and Tourism Administration'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Recreation, Parks, & Tourism Administration'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Parks and Rec'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Parks & Rec'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Rec'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Parks'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Parks and Rec'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Tourism Administration'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	majors['Tourism'.toUpperCase()] = {major: "Recreation, Parks, and Tourism Administration", college: "College of Agriculture"}
	//Agricultural Business
	majors['Agricultural Business'.toUpperCase()] = {major: "Agricultural Business", college: "College of Agriculture"}
	majors['Ag Business'.toUpperCase()] = {major: "Agricultural Business", college: "College of Agriculture"}
	majors['Ag Biz'.toUpperCase()] = {major: "Agricultural Business", college: "College of Agriculture"}
	majors['AB'.toUpperCase()] = {major: "Agricultural Business", college: "College of Agriculture"}

	//College of Arch

	//Architectural Engineering
	majors['Architectural Engineering'.toUpperCase()] = {major: "Architectural Engineering", college: "College of Architecture"}
	majors['Arch Engineering'.toUpperCase()] = {major: "Architectural Engineering", college: "College of Architecture"}
	majors['Arch Engi'.toUpperCase()] = {major: "Architectural Engineering", college: "College of Architecture"}
	//Architecture
	majors['Architecture'.toUpperCase()] = {major: "Architecture", college: "College of Architecture"}
	majors['Arch'.toUpperCase()] = {major: "Architecture", college: "College of Architecture"}
	majors['Arc'.toUpperCase()] = {major: "Architecture", college: "College of Architecture"}
	//City and Regional Planning
	majors['City and Regional Planning'.toUpperCase()] = {major: "City and Regional Planning", college: "College of Architecture"}
	majors['CRP'.toUpperCase()] = {major: "City and Regional Planning", college: "College of Architecture"}
	majors['CaRP'.toUpperCase()] = {major: "City and Regional Planning", college: "College of Architecture"}
	majors['City Planning'.toUpperCase()] = {major: "City and Regional Planning", college: "College of Architecture"}
	majors['Regional Planning'.toUpperCase()] = {major: "City and Regional Planning", college: "College of Architecture"}
	//Construction Management
	majors['Construction Management'.toUpperCase()] = {major: "Construction Management", college: "College of Architecture"}
	majors['Const Management'.toUpperCase()] = {major: "Construction Management", college: "College of Architecture"}
	majors['CSM'.toUpperCase()] = {major: "Construction Management", college: "College of Architecture"}
	majors['CM'.toUpperCase()] = {major: "Construction Management", college: "College of Architecture"}
	//Landscape Architecture
	majors['Landscape Architecture'.toUpperCase()] = {major: "Landscape Architecture", college: "College of Architecture"}
	majors['LSA'.toUpperCase()] = {major: "Landscape Architecture", college: "College of Architecture"}
	majors['LA'.toUpperCase()] = {major: "Landscape Architecture", college: "College of Architecture"}
	majors['Landscape Arch'.toUpperCase()] = {major: "Landscape Architecture", college: "College of Architecture"}
	majors['Landscape Architecture'.toUpperCase()] = {major: "Landscape Architecture", college: "College of Architecture"}


	//College of Engineering

	//Aerospace Engineering
	majors['Aerospace Engineering'.toUpperCase()] = {major: "Aerospace Engineering", college: "College of Engineering"}
	majors['Aerospace'.toUpperCase()] = {major: "Aerospace Engineering", college: "College of Engineering"}
	majors['AE'.toUpperCase()] = {major: "Aerospace Engineering", college: "College of Engineering"}
	majors['ASE'.toUpperCase()] = {major: "Aerospace Engineering", college: "College of Engineering"}
	//Biomedical Engineering
	majors['Biomedical Engineering'.toUpperCase()] = {major: "Biomedical Engineering", college: "College of Engineering"}
	majors['BMED'.toUpperCase()] = {major: "Biomedical Engineering", college: "College of Engineering"}
	majors['BioMED'.toUpperCase()] = {major: "Biomedical Engineering", college: "College of Engineering"}
	majors['BE'.toUpperCase()] = {major: "Biomedical Engineering", college: "College of Engineering"}
	majors['BME'.toUpperCase()] = {major: "Biomedical Engineering", college: "College of Engineering"}
	//Civil Engineering
	majors['Civil Engineering'.toUpperCase()] = {major: "Civil Engineering", college: "College of Engineering"}
	majors['Civil'.toUpperCase()] = {major: "Civil Engineering", college: "College of Engineering"}
	majors['CE'.toUpperCase()] = {major: "Civil Engineering", college: "College of Engineering"}
	//Computer Engineering
	majors['Computer Engineering'.toUpperCase()] = {major: "Computer Engineering", college: "College of Engineering"}
	majors['Comp Engineering'.toUpperCase()] = {major: "Computer Engineering", college: "College of Engineering"}
	majors['Comp Engi'.toUpperCase()] = {major: "Computer Engineering", college: "College of Engineering"}
	majors['CPE'.toUpperCase()] = {major: "Computer Engineering", college: "College of Engineering"}
	//Computer Science
	majors['Computer Science'.toUpperCase()] = {major: "Computer Science", college: "College of Engineering"}
	majors['Comp Sci'.toUpperCase()] = {major: "Computer Science", college: "College of Engineering"}
	majors['CSC'.toUpperCase()] = {major: "Computer Science", college: "College of Engineering"}
	majors['CS'.toUpperCase()] = {major: "Computer Science", college: "College of Engineering"}
	//Electrical Engineering
	majors['Electrical Engineering'.toUpperCase()] = {major: "Electrical Engineering", college: "College of Engineering"}
	majors['EE'.toUpperCase()] = {major: "Electrical Engineering", college: "College of Engineering"}
	majors['Electrical'.toUpperCase()] = {major: "Electrical Engineering", college: "College of Engineering"}
	//Environmental Engineering
	majors['Environmental Engineering'.toUpperCase()] = {major: "Environmental Engineering", college: "College of Engineering"}
	majors['EnvE'.toUpperCase()] = {major: "Environmental Engineering", college: "College of Engineering"}
	majors['EnEng'.toUpperCase()] = {major: "Environmental Engineering", college: "College of Engineering"}
	//General Engineering
	majors['General Engineering'.toUpperCase()] = {major: "General Engineering", college: "College of Engineering"}
	majors['General'.toUpperCase()] = {major: "General Engineering", college: "College of Engineering"}
	majors['Gen Engineering'.toUpperCase()] = {major: "General Engineering", college: "College of Engineering"}
	majors['GE'.toUpperCase()] = {major: "General Engineering", college: "College of Engineering"}
	majors['GEng'.toUpperCase()] = {major: "General Engineering", college: "College of Engineering"}
	//Industrial Engineering
	majors['Industrial Engineering'.toUpperCase()] = {major: "Industrial Engineering", college: "College of Engineering"}
	majors['IE'.toUpperCase()] = {major: "Industrial Engineering", college: "College of Engineering"}
	majors['IENG'.toUpperCase()] = {major: "Industrial Engineering", college: "College of Engineering"}
	majors['Industrial'.toUpperCase()] = {major: "Industrial Engineering", college: "College of Engineering"}
	//Manufacturing Engineering
	majors['Manufacturing Engineering'.toUpperCase()] = {major: "Manufacturing Engineering", college: "College of Engineering"}
	majors['Manufacturing'.toUpperCase()] = {major: "Manufacturing Engineering", college: "College of Engineering"}
	majors['Manuf ENG'.toUpperCase()] = {major: "Manufacturing Engineering", college: "College of Engineering"}
	majors['Manuf Engineering'.toUpperCase()] = {major: "Manufacturing Engineering", college: "College of Engineering"}
	//Materials Engineering
	majors['Materials Engineering'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	majors['Materials'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	majors['Material'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	majors['MATENG'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	majors['Mat Eng'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	majors['Materials Engineering'.toUpperCase()] = {major: "Materials Engineering", college: "College of Engineering"}
	//Mechanical Engineering
	majors['Mechanical Engineering'.toUpperCase()] = {major: "Mechanical Engineering", college: "College of Engineering"}
	majors['ME'.toUpperCase()] = {major: "Mechanical Engineering", college: "College of Engineering"}
	majors['Mech'.toUpperCase()] = {major: "Mechanical Engineering", college: "College of Engineering"}
	majors['Mech Eng'.toUpperCase()] = {major: "Mechanical Engineering", college: "College of Engineering"}
	majors['Mechanical'.toUpperCase()] = {major: "Mechanical Engineering", college: "College of Engineering"}
	//Software Engineering
	majors['Software Engineering'.toUpperCase()] = {major: "Software Engineering", college: "College of Engineering"}
	majors['SWE'.toUpperCase()] = {major: "Software Engineering", college: "College of Engineering"}
	majors['Software'.toUpperCase()] = {major: "Software Engineering", college: "College of Engineering"}
	majors['SE'.toUpperCase()] = {major: "Software Engineering", college: "College of Engineering"}
	majors['SENG'.toUpperCase()] = {major: "Software Engineering", college: "College of Engineering"}
	

	//College of Liberal Arts

	//Theatre Arts
	majors['Theatre Arts'.toUpperCase()] = {major: "Theatre Arts", college: "College of Liberal Arts"}
	majors['TA'.toUpperCase()] = {major: "Theatre Arts", college: "College of Liberal Arts"}
	majors['Theatre'.toUpperCase()] = {major: "Theatre Arts", college: "College of Liberal Arts"}
	//Anthropology and Geography
	majors['Anthropology and Geography'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	majors['Anthropology'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	majors['A&G'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	majors['Geography'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	majors['Geo'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	majors['Anthro'.toUpperCase()] = {major: "Anthropology and Geography", college: "College of Liberal Arts"}
	//Art and Design
	majors['Art and Design'.toUpperCase()] = {major: "Art and Design", college: "College of Liberal Arts"}
	majors['Art'.toUpperCase()] = {major: "Art and Design", college: "College of Liberal Arts"}
	majors['Design'.toUpperCase()] = {major: "Art and Design", college: "College of Liberal Arts"}
	majors['AD'.toUpperCase()] = {major: "Art and Design", college: "College of Liberal Arts"}
	majors['A&D'.toUpperCase()] = {major: "Art and Design", college: "College of Liberal Arts"}
	//Child Development
	majors['Child Development'.toUpperCase()] = {major: "Child Development", college: "College of Liberal Arts"}
	majors['Child Dev'.toUpperCase()] = {major: "Child Development", college: "College of Liberal Arts"}
	majors['Child'.toUpperCase()] = {major: "Child Development", college: "College of Liberal Arts"}
	majors['CD'.toUpperCase()] = {major: "Child Development", college: "College of Liberal Arts"}
	//Comparative Ethnic Studies
	majors['Comparative Ethnic Studies'.toUpperCase()] = {major: "Comparative Ethnic Studies", college: "College of Liberal Arts"}
	majors['CES'.toUpperCase()] = {major: "Comparative Ethnic Studies", college: "College of Liberal Arts"}
	majors['Ethnic Studies'.toUpperCase()] = {major: "Comparative Ethnic Studies", college: "College of Liberal Arts"}
	majors['ES'.toUpperCase()] = {major: "Comparative Ethnic Studies", college: "College of Liberal Arts"}
	//English
	majors['English'.toUpperCase()] = {major: "English", college: "College of Liberal Arts"}
	majors['Engl'.toUpperCase()] = {major: "English", college: "College of Liberal Arts"}
	//Graphic Communication
	majors['Graphic Communication'.toUpperCase()] = {major: "Graphic Communication", college: "College of Liberal Arts"}
	majors['GRC'.toUpperCase()] = {major: "Graphic Communication", college: "College of Liberal Arts"}
	majors['GC'.toUpperCase()] = {major: "Graphic Communication", college: "College of Liberal Arts"}
	majors['Graphic Comms'.toUpperCase()] = {major: "Graphic Communication", college: "College of Liberal Arts"}
	majors['Graphic Com'.toUpperCase()] = {major: "Graphic Communication", college: "College of Liberal Arts"}
	//History
	majors['History'.toUpperCase()] = {major: "History", college: "College of Liberal Arts"}
	majors['Hist'.toUpperCase()] = {major: "History", college: "College of Liberal Arts"}
	majors['His'.toUpperCase()] = {major: "History", college: "College of Liberal Arts"}
	//Journalism
	majors['Journalism'.toUpperCase()] = {major: "Journalism", college: "College of Liberal Arts"}
	majors['Journal'.toUpperCase()] = {major: "Journalism", college: "College of Liberal Arts"}
	majors['Journ'.toUpperCase()] = {major: "Journalism", college: "College of Liberal Arts"}
	//Modern Languages and Literatures
	majors['Modern Languages and Literatures'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['MLL'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Modern Languages'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Modern Literatures'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Modern Lang and Lit'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Languages'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Modern Languages and Literatures'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	majors['Literature'.toUpperCase()] = {major: "Modern Languages and Literatures", college: "College of Liberal Arts"}
	//Music
	majors['Music'.toUpperCase()] = {major: "Music", college: "College of Liberal Arts"}
	majors['Mus'.toUpperCase()] = {major: "Music", college: "College of Liberal Arts"}
	//Philosophy
	majors['Philosophy'.toUpperCase()] = {major: "Philosophy", college: "College of Liberal Arts"}
	majors['Phil'.toUpperCase()] = {major: "Philosophy", college: "College of Liberal Arts"}
	//Political Science
	majors['Political Science'.toUpperCase()] = {major: "Political Science", college: "College of Liberal Arts"}
	majors['Poli Sci'.toUpperCase()] = {major: "Political Science", college: "College of Liberal Arts"}
	majors['PoliSci'.toUpperCase()] = {major: "Political Science", college: "College of Liberal Arts"}
	majors['Political Sci'.toUpperCase()] = {major: "Political Science", college: "College of Liberal Arts"}
	//Psychology
	majors['Psychology'.toUpperCase()] = {major: "Psychology", college: "College of Liberal Arts"}
	majors['Psych'.toUpperCase()] = {major: "Psychology", college: "College of Liberal Arts"}
	majors['Psy'.toUpperCase()] = {major: "Psychology", college: "College of Liberal Arts"}
	majors['Psyc'.toUpperCase()] = {major: "Psychology", college: "College of Liberal Arts"}
	//Sociology
	majors['Sociology'.toUpperCase()] = {major: "Sociology", college: "College of Liberal Arts"}
	majors['Socio'.toUpperCase()] = {major: "Sociology", college: "College of Liberal Arts"}
	majors['Soci'.toUpperCase()] = {major: "Sociology", college: "College of Liberal Arts"}


	//College of Science and Math (COSAM)

	//Biochemistry
	majors['Biochemistry'.toUpperCase()] = {major: "Biochemistry", college: "College of Science and Math"}
	majors['Biochem'.toUpperCase()] = {major: "Biochemistry", college: "College of Science and Math"}
	majors['BCHEM'.toUpperCase()] = {major: "Biochemistry", college: "College of Science and Math"}
	majors['Biochemistry'.toUpperCase()] = {major: "Biochemistry", college: "College of Science and Math"}
	//Biological Sciences
	majors['Biological Sciences'.toUpperCase()] = {major: "Biological Sciences", college: "College of Science and Math"}
	majors['Bio'.toUpperCase()] = {major: "Biological Sciences", college: "College of Science and Math"}
	majors['Bsci'.toUpperCase()] = {major: "Biological Sciences", college: "College of Science and Math"}
	majors['B SCI'.toUpperCase()] = {major: "Biological Sciences", college: "College of Science and Math"}
	//Chemistry
	majors['Chemistry'.toUpperCase()] = {major: "Chemistry", college: "College of Science and Math"}
	majors['Chem'.toUpperCase()] = {major: "Chemistry", college: "College of Science and Math"}
	//Kinesiology
	majors['Kinesiology'.toUpperCase()] = {major: "Kinesiology", college: "College of Science and Math"}
	majors['Kines'.toUpperCase()] = {major: "Kinesiology", college: "College of Science and Math"}
	//Liberal Studies
	majors['Liberal Studies'.toUpperCase()] = {major: "Liberal Studies", college: "College of Science and Math"}
	majors['Lib Studies'.toUpperCase()] = {major: "Liberal Studies", college: "College of Science and Math"}
	majors['LS'.toUpperCase()] = {major: "Liberal Studies", college: "College of Science and Math"}
	//Marine Sciences
	majors['Marine Sciences'.toUpperCase()] = {major: "Marine Sciences", college: "College of Science and Math"}
	majors['Marine'.toUpperCase()] = {major: "Marine Sciences", college: "College of Science and Math"}
	majors['Marine Sci'.toUpperCase()] = {major: "Marine Sciences", college: "College of Science and Math"}
	//Mathematics
	majors['Mathematics'.toUpperCase()] = {major: "Mathematics", college: "College of Science and Math"}
	majors['Math'.toUpperCase()] = {major: "Mathematics", college: "College of Science and Math"}
	//Physics
	majors['Physics'.toUpperCase()] = {major: "Physics", college: "College of Science and Math"}
	majors['Phys'.toUpperCase()] = {major: "Physics", college: "College of Science and Math"}
	//Statistics
	majors['Statistics'.toUpperCase()] = {major: "Statistics", college: "College of Science and Math"}
	majors['Stat'.toUpperCase()] = {major: "Statistics", college: "College of Science and Math"}
	majors['Stats'.toUpperCase()] = {major: "Statistics", college: "College of Science and Math"}
	//Public Health
	majors['Public Health'.toUpperCase()] = {major: "Public Health", college: "College of Science and Math"}
	majors['Pub Health'.toUpperCase()] = {major: "Public Health", college: "College of Science and Math"}
	majors['Health'.toUpperCase()] = {major: "Public Health", college: "College of Science and Math"}


	//College of Business

	//Business Administration
	majors['Business Administration'.toUpperCase()] = {major: "Business Administration", college: "College of Business"}
	majors['Business'.toUpperCase()] = {major: "Business Administration", college: "College of Business"}
	majors['Biz'.toUpperCase()] = {major: "Business Administration", college: "College of Business"}
	majors['Biz Admin'.toUpperCase()] = {major: "Business Administration", college: "College of Business"}
	majors['BizAdmin'.toUpperCase()] = {major: "Business Administration", college: "College of Business"}
	//Economics
	majors['Economics'.toUpperCase()] = {major: "Economics", college: "College of Business"}
	majors['Econ'.toUpperCase()] = {major: "Economics", college: "College of Business"}
	majors['Econom'.toUpperCase()] = {major: "Economics", college: "College of Business"}
	//Industrial Technology and Packaging
	majors['Industrial Technology and Packaging'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
	majors['IT'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
	majors['ITP'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
	majors['Industrial Technology'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
	majors['Packaging'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
	majors['Industrial Techn'.toUpperCase()] = {major: "Industrial Technology and Packaging", college: "College of Business"}
