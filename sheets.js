 // Client ID and API key from the Developer Console
      var CLIENT_ID = '';
      var API_KEY = '';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');

      var categories = [];
      var params = [];

      var csa_members = [];
      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          appendPre(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listMajors();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('boxes');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
      function appendBox(message){
      	document.getElementById('boxes').innerHTML = "<h3>" +message+"</h3>\n "
      }
      function appendCheck(message){
        document.getElementById('content').innerHTML += message
      }

      function validCheck(text){
        var nonCheck = ["Timestamp", "Cal Poly Email", "Do you want to be a Big or a little?", "First Name", "Last Name",
                         "Phone Number", "T-Shirt Size", "Birthday","Please try to match my Big/Little based on:", 
                         "Foods+Drinks you dislike:" ,"TV Shows / Movies you dislike:","Sports / Team(s) you dislike:" ,
                         "Animals you dislike:", "Music you dislike:", "Weird dislikes", "What are 3 adjectives that describe you?",
                         "If you were the host of a podcast, what would you talk about?", "Biggest fears? Pet peeves?",
                         "3 things on your bucket list?", "Who inspires you the most and why? (Non family member)",
                         "Name one REALLLLYYYYY stupid thing you want to do, but would never do?", "What do you want to do in SLO before you graduate?",
                         "All your classes are suddenly cancelled today! Even better you have no other responsibilities! How do you spend your day off?",
                         "You are mysteriously given $10,000 but it all disappears in a week(so you can't save it), what do you do with it?",
                         "Anything else you would board/your big to know? (You may request a big/little/family but they are not guaranteed to be paired with you) ",
                         "Submit a picture of yourself, HIGHLY recommended"   ]
        var rename = ["Hometown:", "Gender Identity:", "Major", 
                      "Graduation Year", "Dietary Restrictions (Not Allergies)","Food Allergies",
                        "Optional: Myer Briggs Score", "How much do you plan on partying?", "How spontaneous are you?", 
                        "How introverted or extroverted are you?", "Foods+Drinks you like:", "TV Shows / Movies you like:",
                          "Sports / Team(s) you like:", "Animals you like:", "Music you like:", "Weird likes:" , "What are some of your hobbies? Be as specific as possible.",
                          ]

        var to = ["Hometown", "Gender", "Major",
                "Grad Year", "Diet", "Allergies",
                "Myer-Briggs", "Partying", "Spontaneity",

                  "Extraversion", "Food & Drink", "TV & Movies",
                  "Sports", "Animals", "Music",
                  "Weird Tastes", "Hobbies"]
      

      if(nonCheck.indexOf(text) !== -1){
        return "FALSE"
      }
      else{
       // console.log(rename.indexOf(text))
        if(rename.indexOf(text) !==-1){
          return to[rename.indexOf(text)]
        }
        else{
                  return text

        }
      }
    }

    function findPerson(){

        var person_name= "";
        person_name = (document.getElementById('first_name').value).toUpperCase().trim() + "_" +(document.getElementById('last_name').value).toUpperCase().trim();
        if( typeof csa_members[person_name] !== 'undefined' ){
          appendBox(csa_members[person_name].name + " " + csa_members[person_name].matchOn)
          return person_name
        }
        else{
          return "YOU DUN FUCKED UP!"
        }

    }


    function getParams() {
      var cOptions = document.forms[0];
      var txt = "";
      var i;
      for (i = 0; i < cOptions.length; i++) {
        if (cOptions[i].checked) {
          params.push(cOptions[i].value)
        }
      }

      console.log(findPerson())
     console.log(params)
     }

      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      function listMajors() {

       // var afterFirst = false; 

        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1DYD-p0PEFZ1a9coTxgcYmlao5IlbWgfi3FzS1ERxY8U',
          range: 'CSA FORM!A1:AQ',
        }).then(function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            //appendBox('Name');
            //appendCheck('<div class = "testpls"> ')
            //Find categories and convert them to 
            var checks  = "<form><div id= 'testpls'>\n"
            var new_line = 0;

            //Check Marks

            for (i = 0; i < range.values[0].length; i++) {
              // Print columns A and E, which correspond to indices 0 and 4.
              var name =  range.values[0][i];
              categories.push(name)
              var correctName = validCheck(name);

              if( correctName !== "FALSE" ){
                  new_line+=1;
               name = "<label class ='container' >" +  "\n <input type='checkbox' name='options' value='" + correctName + "'>" +correctName+"</label>"
               checks += name 
             }
              //appendPre(row[3] + ' '+ row[4]);
                if( new_line >=3){
                  checks += "<br>"
                  new_line =0;
                }
                else{
                }

            };

            checks += "</div></form>"
            appendCheck(checks)
            //appendBox(categories)
            console.log(categories)

            //Fill Members
            for (i = 1; i < range.values.length; i++) {
              var row = range.values[i];
              csa_members[(row[3].toUpperCase().trim()+ "_" + row[4].toUpperCase().trim())] = ( new Member(row))
              // Print columns A and E, which correspond to indices 0 and 4.
              appendPre(row[3] + ' '+ row[4]+" | " + row[2] +" | " + row[15]);
            }
            console.log(csa_members)
          } else {
            appendPre('No data found.');
          }
        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        });
      }




class Member{
  constructor(line){
    this.time = line[categories.indexOf("Timestamp")] 
    this.cpEmail = line[categories.indexOf("Cal Poly Email")] 
    this.pairType = line[categories.indexOf("Do you want to be a Big or a little?")] 
    this.name = line[categories.indexOf("First Name")] + " " + line[categories.indexOf("Last Name")]
    this.hometown =line[categories.indexOf("Hometown:")]  //needs function
    this.gender = line[categories.indexOf("Gender Identity:")] 
    this.major = line[categories.indexOf("Major")]  //needs function
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
