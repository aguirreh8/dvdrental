const express = require("express");
const router = express.Router();
const rentals = require("../models/rentals.js");

router.get("/", function(req, res) {
	rentals.select(function(data) {
		return data;
	})
});

module.exports = router;