# PairUp ![PairUp_Logo](images/PairUp_Mini2.png)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/rpremi12/PairUp)

PairUp is a program that utilizes Javascript and several Google APIs to look for similar responses in Google Sheets Spreadsheets.

  - Google Drive based, users can access spreadsheets authorized to their google account.
  - Provides compatibility scores for different types of responses.
  - Sort by categories and score.

# New Features!

  - Google Sheets integration, no uploading required.
  - Sort by Categories.

### Tech

* Javascript
* Google Sheets API - HTML enhanced for web apps!
* Google Places API - Allows for Location based Pairing.
* jQuery - general purpose for Javascript Development

### Deploying Locally

PairUp will be available for personal use via a website soon, however if you want to run it locally you'll have to get a Google API key for [Google Sheets](https://developers.google.com/sheets/api/) and [Google Places](https://developers.google.com/places/web-service/intro) as well as [Python](https://www.python.org/downloads/) 2 or 3 to host a local webserver. requires [Node.js](https://nodejs.org/) v4+ to run,

Install the dependencies and set the API Keys start the server in your local folder with

```
$ python3 -m http.server 8000
```

You can then view the client build of the site in your browser at:

```
localhost:8000
```

You will also need to bypass CORS to run this locally, I reccommend [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/?src=search) for firefox users.


### Development

At the moment, I am currently developing this project independently with a few people doing Q&A, but feel free to submit a pull request if you would like to contribute.


