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

	insert: function(firstName, lastName, date, cb) {
		connection.query(
			"INSERT INTO actor(first_name, last_name, last_update) VALUES(??, ??, ??)",
			[firstName, lastName, date],
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