// Create connection to object relational mapping
const orm = require("../connections/orm.js");

const rentals = {
	select: function(cb) {
		orm.select(function(res) {
			cb(res);
		})
	},

	insert: function(firstName, lastName, date, cb) {
		orm.insert(firstName, lastName, date, function(res) {
			cb(res);
		})
	}
}

module.exports = rentals;