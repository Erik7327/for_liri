console.log("What it do! My name is Liri!");
var inquirer = require("./keys.js");


// tweet- 
function Command(myTweets, spotifyThisSong, movieThis, doWhatItSays){
	this.myTweets = tweets;
	this.spotifyThisSong = song;
	this.movieThis = movie;
	this.doWhatItSays = command;

	this.twitterKeys function() {
		inquirer(twitterKeys(20));
	}
	this.spotifyThisSong function() {
		inquirer(spotifyThisSong); 
	}
	this.movieThis function movieThis() {
		inquirer(omdbKey);
		// body...
	}
};

inquirer.prompt("What can I do you for?")

// write function for user to call a commad and return info from three api's, and run it to terminal.


.then(function() {
	if (command == myTweets) {
		inquirer.require(twitterKeys);
		console.log(data);
	},
	if (command == spotifyThisSong) {
		inquirer.require(spotifyThisSong);
		console.log(data);
	},
	if (command == movieThis) {
		inquirer.require(twitterKeys);
		console.log(data);
	}

});




