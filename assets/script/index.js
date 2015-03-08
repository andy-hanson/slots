"use strict"

var
	$ = require('jquery'),
	Game = require("./Game")

$(function() { new Game($('#gameCanvas')[0]).run() })
