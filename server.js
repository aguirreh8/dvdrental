// Define dependencies
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/rentalControllers.js");

// Create express connection
const app = express();
const PORT = 3000;

// Handle middleware, body-parser and use controller routes
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(routes);

// Open server connection
app.listen(PORT, function() {
	console.log(`Listening to localhost port ${PORT}`);
})
