const dotEnv = require('dotenv').config();
const keys = require('./keys.js')
const spotify = require('node-spotify-api')
const request = require('request')
const omdb = require('omdb')
const fs = require('fs')
const spotify = new spotify(keys.spotify);
var moment = require('moment');

let [one, two, command, ...input] = process.argv;
console.log(command);

input = input.join(" ")

switch (command) {

    case "spotfy-this-song":
        console.log("this song is amazing")
        spotify_this(input);
        break
    case "movie-this":
        console.log("Cool movie!")
        movie_this(input);
        break
    case "do-what-it-says":
        console.log("do the fandango")
        grabText();
        break
}


function spotify_this(input) {
    var song;
    if (input === "") {
        song = 'The Sign Ace of Base';
    } else {
        song = input;
    }
    spotify.search({
        type: 'track',
        query: song
    }, function (err, data) {
        if (err) {
            console.log('Retrieval Error' + err);
            return;
        }
        console.log(data.tracks.items[0].album.artists[0].name)
        console.log(data.tracks.items[0].name)
        console.log(data.tracks.items[0].external_urls.spotify)
        console.log(data.tracks.items[0].album.name)
    });
};

// "concert-this": function () {
//     axios.get('https://rest.bandsintown.com/artist/' + str + '/events?app_id=codingbootcamp')
//         .then(function (response) {
//             console.log('Venue Name: ' + response.data[0].venue.name);
//             console.log('Venue Location: ' + response.data[0].venue.city + ", " + response.data[0].venue.country);
//             console.log('Event Date: ' + moment(response.data[0].datetime).format("MM/DD/YYY"));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// },

function movie_this(inputs) {
    var queryUrl = "http://www.omdbapi.com/?t=" + inputs + "&y=&plot=short&apikey=a88d7e6c";

    request(queryUrl, function (error, response, body) {
        if (!inputs) {
            inputs = 'Mr Nobody';
        }
        if (!error && response.statusCode === 200) {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
};

function grabText() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        var song = data.split(", ")[1];
        spotify_this(song);
    })
}

if (process.argv[2] === "concert-this") {
    var artistName = process.argv.slice(3).join(' ');

    request('https://rest.bandsintown.com/artists/' + artistName + '/events?app_id=codingbootcamp=upcoming',
        function (error, response, art) {
            var shows = JSON.parse(art)
            console.dir(shows[0].venue.name);
            console.dir(shows[0].venue.city);
            console.dir(shows[0].venue.country);
            console.dir(shows[0].datetime);
        });
};