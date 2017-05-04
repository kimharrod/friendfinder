var fs = require("fs");
var friendsData;

// read in the friends data
fs.readFile("app/data/friends.js", "utf8", function (err, data) {

	if (err) throw err;

	// parse the JSON data to create a javascript object
	friendsData = JSON.parse(data);

}); // end readFile callback

// make our routes accessible to the calling script file (server.js)
module.exports = function(app) {

	// get route to display a JSON of all possible friends
	app.get("/api/friends", function(req,res) {
		res.json(friendsData);
	}); // end get route

	// post route to handle incoming survey results and return best match
	app.post("/api/friends", function(req, res) {

		// assign form data to currentUser object
		var currentUser = req.body;

		// array that will hold the final diff score for each user
		var diffArray = [];

		// for loop to compare the user's answers to each friend in the database
		for (let i = 0; i < friendsData.length; i++){

			var diffSum = 0;

			// for each of the 10 questions get a number differential
			for (let n = 0; n < currentUser.scores.length; n++) {

				var diff = currentUser.scores[n] - friendsData[i].scores[n];

				diffSum = diffSum + Math.abs(diff);

			} // end loop to compare each answer

			// array to hold the diff scores for each potential match		
			diffArray.push({

				"name": friendsData[i].name,

				"friendscore": diffSum,

				"photo": friendsData[i].photo

			}); // end diffArray push

		} // end of loop to compare each friend

		// code to determine the best match based on score differentials	
		var lowMatch = 100;
		var bestMatch = {};

		for (let i =0; i < diffArray.length; i++) {

			if (diffArray[i].friendscore < lowMatch) {

				lowMatch = diffArray[i].friendscore;
				bestMatch = diffArray[i];

			} // end if friendscore is lowest

		} // end for loop of all potential matches

		// add the current user data to the array of all friends
		friendsData.push(currentUser);

		// write entire array of friends to file for persistent data storage
		fs.writeFile('app/data/friends.js', JSON.stringify(friendsData, null, 4), function (err) {

			if (err) throw err;
		});

		// return the best match to the browser
		res.json(bestMatch);


	}); // end post route

}; // end module.exports