// Create connection to object relational mapping
const orm = require("../connections/orm.js");

const rentals = {
	select: function(cb) {
		orm.select(function(res) {
			cb(res);
		})
	},

	selectAllIDs: function(cb) {
		orm.selectAllIDs(function(res) {
			cb(res);
		})
	},

	insert: function(firstName, lastName, cb) {
		orm.insert(firstName, lastName, function(res) {
			cb(res);
		})
	},

	delete: function(id, cb) {
		orm.delete(id, function(res) {
			cb(res);
		})
	}
}

module.exports = rentals;