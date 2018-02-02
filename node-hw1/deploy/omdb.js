// need to input omdb api and key. 
var omdbKey = "bd14cf1b"

//finish key, and write function to be able to call from liri.js

function movieThis() {
	omdb
	.request(" http://www.omdbapi.com/?i=tt3896198&apikey=bd14cf1b")
	  .then(function(data) {
	    console.log(data); 
	  })
	  .catch(function(err) {
	    console.error('Error occurred: ' + err); 
	  });
}


module.exports = movieThis;

}