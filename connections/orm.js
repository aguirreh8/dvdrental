const connection = require("./connection.js");

const orm = {
	select: function(cb) {
		connection.query(
			"SELECT * FROM actor"
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

module.exports = orm; 