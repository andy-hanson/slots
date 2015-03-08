"use strict"

var $ = require("jquery")
var
	winSound = new Audio('sound/win.ogg'),
	loseSound = new Audio('sound/lose.ogg')

module.exports = Scorer
function Scorer() {
	this.score = 0
	this.show()
}
Scorer.prototype = {
	show: function() {
		$("#score").text(this.score)
	},

	onWin: function() {
		this.score += 1
		this.show()
		winSound.play()
	},

	onLose: function() {
		this.score = 0
		this.show()
		loseSound.play()
	}
}


