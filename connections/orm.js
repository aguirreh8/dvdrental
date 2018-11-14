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
	}


}

// Export object
module.exports = orm; 