use
	global Audio requestAnimationFrame
	.Scorer
	.Slot
	.util all-same?

sounds =
	spin. new Audio "sound/spin.ogg"
	start. new Audio "sound/start.ogg"

n-slots = 3

Game. class
	construct! .canvas
		.context = canvas.getContext "2d"
		.scorer = new Scorer
		.reset-slots!()
		.state := "waiting"

		canvas.addEventListener "click" !|
			.stop-next-slot!()

	get "width"
		.canvas.width
	get "height"
		.canvas.height

	"run!" !|
		.step!()
		.draw!()
		requestAnimationFrame !|
			.run!()

	"step!" !|
		for! .slots
			_.step!()

	"draw!" !|
		c = .context
		c.clearRect 0 0 .width .height
		for! .slots
			_.draw! c
			if! =? .state "waiting"
				c.textAlign := "center"
				c.textBaseline := "middle"
				c.font := "64px impact"
				c.fillText "Click me!" (/ .width 2) (/ .height 2)

	"stop-next-slot!" !|
		switch! .state
			"waiting"
				sounds.start.play()
				.reset-slots!()
			"playing"
				sounds.spin.play()
				if! <? .next-slot n-slots
					.slots[.next-slot].stop!()
					.next-slot := + 1 .next-slot

	"on-slot-stopped!" !|slot
		| Happens a small time after stop-next-slot.
		slots-so-far = .slots.slice 0 (+ 1 slot.slotIndex)
		get-idx = |slot
			slot.current-slot
		case!
			not all-same? slots-so-far get-idx
				.scorer.on-lose!()
				.state := "waiting"
			=? slot.slotIndex (- n-slots 1)
				.scorer.on-win!()
				.state := "waiting"
			else
				pass

	"reset-slots!" !|
		.state := "playing"
		.next-slot := 0
		.slots := @for i in new Range 0 n-slots
			new Slot this i
