"use strict"

var
	$ = require("jquery"),
	Scorer = require("./Scorer"),
	Slot = require("./Slot"),
	util = require("./util.js"),
		allSame = util.allSame, send = util.send, sendTo = util.sendTo
var
	spinSound = new Audio('sound/spin.ogg'),
	startSound = new Audio('sound/start.ogg')

module.exports = Game
function Game(canvas) {
	this.canvas = canvas
	this.width = this.canvas.width
	this.height = this.canvas.height
	this.context = this.canvas.getContext('2d')
	this.scorer = new Scorer()
	this.resetSlots()
	this.state = 'waiting'
	this.canvas.onclick = sendTo(this, 'stopNextSlot')
}

Game.nSlots = 3

Game.prototype = {
	run: function() {
		this.step()
		this.draw()
		window.requestAnimationFrame(sendTo(this, 'run'))
	},

	step: function() {
		this.slots.forEach(send('step'))
	},

	draw: function() {
		var c = this.context
		c.clearRect(0, 0, this.width, this.height)

		this.slots.forEach(send('draw', c))

		if (this.state == 'waiting') {
			c.textAlign = 'center'
			c.textBaseline = 'middle'
			c.font = '60px impact'
			c.fillText('Click me!', this.width / 2, this.height / 2)
		}
	},

	stopNextSlot: function() {
		switch (this.state) {
			case 'waiting':
				startSound.play()
				this.resetSlots()
				break
			case 'initWaiting':
				startSound.play()
				this.state = 'playing'
				break
			default:
				spinSound.play()
				if (this.nextSlot < Game.nSlots) {
					this.slots[this.nextSlot].stop()
					this.nextSlot += 1
				}
		}
	},

	// Happens a small time after stopNextSlot.
	onSlotStopped: function(slot) {
		var slotsSoFar = this.slots.slice(0, slot.slotIndex + 1)
		if (!allSame(slotsSoFar, send('currentImageIndex'))) {
			this.scorer.onLose()
			this.state = 'waiting'
		}
		else if (slot.slotIndex === Game.nSlots - 1) {
			this.scorer.onWin()
			this.state = 'waiting'
		}
	},

	resetSlots: function() {
		this.state = 'playing'
		this.nextSlot = 0
		this.slots = [ ]
		for (var i = 0; i < Game.nSlots; i++)
			this.slots.push(new Slot(this, i))
	}
}
