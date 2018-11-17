// Use PostgreSQL database connection
const connection = require("./connection.js");

// Create Object Relational Mapping
const orm = {
	// Select all data
	select: function(cb) {
		connection.query(
			"SELECT * FROM actor LIMIT 5"
		,
		function(err, data) {
			if (err) {
				throw err;
			}
			cb(data);
		}
		);
	},

	// Insert into actor table
	insert: function(firstName, lastName, cb) {
		connection.query(
			"INSERT INTO actor(first_name, last_name) VALUES($1, $2)",
			[firstName, lastName],
			function(err, data) {
				if (err) {
					throw err;
				}
				cb(data);
			})
	}
}

// Export object
module.exports = orm; 