
console.log('this is loaded');
// twitter
var twitterKeys = {
  consumer_key: '<XkKSsxAVeDPf3MSr2yZgdUUJ0>',
  consumer_secret: '<	m9i4Fye7dkgprWg9nW7iN8zEWaevvAoHvv53EXaz39hw0Z4q5Z>',
  access_token_key: '<954242791202156544-JmcxeC39nnEW1Hchx73wKyniuohFMdq>',
  access_token_secret: '<RBMpZbtutl2Ifu1es3CwwgPzr8lNubYekNsX5l9bBAUQP>',
}

module.exports = twitterKeys;

//write function to call in liri.js
function myTweets() {
	.request(twitterKeys)
	  .then(function(data) {
	    console.log(data); 
	  })
	  .catch(function(err) {
	    console.error('Error occurred: ' + err); 
	  });
}


module.exports = myLastTweets;

}

