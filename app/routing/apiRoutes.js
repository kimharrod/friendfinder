var fs = require("fs");
var friendsData;

// read in the friends data
fs.readFile("app/data/friends.js", "utf8", function (err, data) {

	if (err) throw err;

	// parse the JSON data to create a javascript object
	friendsData = JSON.parse(data);

}); // end readFile callback