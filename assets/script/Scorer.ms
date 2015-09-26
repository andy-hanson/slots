import
	global Audio document

sounds =
	win. new Audio "sound/win.ogg"
	lose. new Audio "sound/lose.ogg"

Scorer. class
	construct!
		.score ::= 0
		.show!()

	"show!" !|
		em = document.getElementById "score"
		em.textContent := .score

	"on-win!" !|
		.score := + 1 .score
		.show!()
		sounds.win.play()

	"on-lose!" !|
		.score := 0
		.show!()
		sounds.lose.play()
