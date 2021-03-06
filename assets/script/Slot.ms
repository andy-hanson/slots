import
	global Image

n-images = 3
slot-width = 100
image-height = 100
cycle-height = * n-images image-height
ddy = 0.05 || Amount to slot down by each frame

images = @for i of 0...n-images
	. with new Image
		_.src := "image/#i.png"

Slot. class
	construct .game .slotIndex
		.state := 'running || state is 'running, 'stopping, or 'stopped
		.dy := + 1 + slotIndex .game.scorer.score
		.y := * Math.random() cycle-height
		.x := * slotIndex slot-width

	get current-slot
		Math.floor / .y image-height

	step! !\
		move! = !\
			.y := modulo (+ .y .dy) cycle-height

		switch .state
			'stopped
				pass
			'stopping
				.dy := - .dy ddy
				if <? .dy 0
					.fully-stop!()
				move!()
			'running
				move!()

	draw! !\c
		i = 0
		for y of ((- .y cycle-height)...(.game.height)).by image-height
			image = images[i]
			i := modulo (+ i 1) n-images
			c.drawImage image .x y

	stop! !\
		.state := 'stopping

	my fully-stop! !\
		.y := nearest-floor .y image-height
		.dy := 0
		.state := 'stopped
		.game.on-slot-stopped! this
