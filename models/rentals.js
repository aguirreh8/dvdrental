const orm = require("../connectons/orm.js");

const rentals = {
	select: function(cb) {
		orm.select(function(res) {
			cb(res);
		})
	}
}

module.exports = burger;