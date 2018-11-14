// Create express route dependencies
const express = require("express");
const router = express.Router();
const rentals = require("../models/rentals.js");
const path = require("path");

// Create routes

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/api", function(req, res) {
	rentals.select(function(data) {
		return res.json(data.rows);
	})
});

module.exports = router;