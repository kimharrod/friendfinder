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
	app. post("/api/friends", function(req, res) {


	}); // end post route

}; // end module.exports