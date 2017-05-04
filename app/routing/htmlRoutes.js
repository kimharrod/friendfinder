var path = require ("path");

// make our route accessible to the calling script file (server.js)
module.exports = function(app) {

	// route to return the survey page to the browser for display
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(_dirname, "/../public/survey.html"));
	});

}; // end module.exports