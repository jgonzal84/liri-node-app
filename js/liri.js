// At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

// ```js
// require("dotenv").config();
// ```

// Add the code required to import the `keys.js` file and store it in a variable.
  
// * You should then be able to access your keys information like so

//   ```js
//   var spotify = new Spotify(keys.spotify);
//   ```


require("dotenv").config();

var request = require('request');
var spotify = require('node-spotify-api');

var spotify = new spotify({
    id: 'fe0e9fe990ff4a36ac680831cd73d544',
    secret: '618671f431894aff81056ad60e972348',
});

var keys = require('./keys.js');


// here will need to get the concert app working
// using an if statement and the process.argv[] and making it equal to the concert
if (process.argv[2] === "concert-this") {
    var artistName = process.argv.slice(3).join(' ');

request('//bandsintown...' + name + 'event'
    function (error, response, art) {
        var shows = JSON.parse(art)
        console.dir(shows[0].venue.name);
        console.dir(shows[0].venue.city);
        console.dir(shows[0].venue.country);
        console.dir(shows[0].datetime);
    });
};
// you'll need to make a variable for the artists name within the if statement. this will be the process.argv.slice().join('');

if (process.argv[2] === "movie-this") {
    var = movieName process.argv.slice(3).join(' ');

    request('' + movieName + '',
        function (error, response, picture) {
            var movieInfo = JSON.parse(picture)
            console.dir(movieInfo.Title);
            console.dir(movieInfo.Year);
            console.dir(movieInfo.imdbRating);
            console.dir(movieInfo.Ratings);
            console.dir(movieInfo.Country);
            console.dir(movieInfo.Language);
            console.dir(movieInfo.Plot);
            console.dir(movieInfo.Actors);
            if (process.argv.length = 3) {
                return movieInfo = 'Mr. Nobody'
            }
        })
};

// then request the url + the srtists name + the event
    // then a function with err, res, art{
        // then var shows = json.p;arse
    // }

