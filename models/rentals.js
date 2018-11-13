const orm = require("../connections/orm.js");

const rentals = {
	select: function(cb) {
		orm.select(function(res) {
			cb(res);
		})
	}
}

module.exports = rentals;