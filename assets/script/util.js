"use strict"

module.exports = {
	sendTo: function(obj, msg) {
		return module.exports.send(msg).bind(null, obj)
	},

	send: function(msg) {
		var firstArgs = [].slice.call(arguments, 1)
		return function(obj) {
			return obj[msg].apply(obj, firstArgs.concat([].slice.call(arguments, 1)))
		}
	},

	allSame: function(list, fun) {
		if (list.length == 0)
			return true
		var x = fun(list[0])
		for (var i = 1; i < list.length; i++)
			if (fun(list[i]) !== x)
				return false
		return true
	},

	roundDownToNearest: function(a, b) {
		return Math.floor(a / b) * b
	}
}
