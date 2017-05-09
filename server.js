// Dependencies (npm packages that give our server useful functionality)
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
var app = express();
// Sets an initial port to be used in our listener
var PORT = process.env.PORT || 4242;

// Static directory
app.use(express.static(process.cwd() + '/app/public'));


// Sets up the Express app to handle data parsing
// Allows our server to interpret the data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Here we point our server to a series of "route" files.
// Routes tell our server how to respond when users visit/request data from URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Static directory
app.use(express.static(process.cwd() + '/app/public'));

// Code that "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});