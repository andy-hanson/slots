"use strict"

var roundDownToNearest = require("./util").roundDownToNearest

module.exports = Slot
function Slot(game, index) {
	this.state = 'running' // 'stopping' 'stopped'
	this.game = game
	this.slotIndex = index
	this.dy = 1 + index + this.game.scorer.score
	this.y = Math.random() * Slot.cycleHeight
	this.x = index * 100
}

Slot.nImages = 3
Slot.imageHeight = 100
Slot.cycleHeight = Slot.nImages * Slot.imageHeight
Slot.ddy = 0.05 // Amount to slow down by each frame
Slot.images = (function() {
	var _ = []
	for (var i = 0; i < Slot.nImages; i++)
		(function(i) { // Get immutable `i`
			var image = new Image()
			image.src = 'image/' + i + '.png'
			image.addEventListener('load', function() {
				_[i] = image
			})
		})(i)
	return _
})()

Slot.prototype = {
	step: function() {
		if (this.state == 'stopped')
			return
		if (this.state == 'stopping') {
			this.dy -= Slot.ddy
			if (this.dy < 0)
				this.fullyStop()
		}
		this.y = (this.y + this.dy) % Slot.cycleHeight
	},

	draw: function(c) {
		var i = 0
		for (var y = this.y - Slot.cycleHeight; y < this.game.height; y += Slot.imageHeight) {
			var image = Slot.images[i]
			i = (i + 1) % Slot.nImages
			if (image !== undefined)
				c.drawImage(image, this.x, y)
		}
	},

	stop: function() {
		this.state = 'stopping'
	},

	fullyStop: function() {
		this.y = roundDownToNearest(this.y, Slot.imageHeight)
		this.dy = 0
		this.state = 'stopped'
		this.game.onSlotStopped(this)
	},

	currentImageIndex: function() {
		return Math.floor(this.y / Slot.imageHeight)
	}
}
