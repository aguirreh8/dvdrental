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

router.get("/api/allId", function(req, res) {
	rentals.selectAllIDs(function(data) {
		return res.json(data.rows);
	})
});

router.post("/api/new", function(req, res) {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	rentals.insert(firstName, lastName, function(data) {
		return res.json(data);
	})
})

router.delete("/api/delete/:id?", function(req, res) {
	const id = req.params.id;
	rentals.delete(id, function(data) {
		return res.json(data);
	})
})

module.exports = router;