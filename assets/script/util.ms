all-same?. |_:@ fun:Function
	or empty?_
		fst = fun _[0]
		all? _ |em
			=? fst (fun em)

round-down-to-nearest. |a b
	* b (int/ a b)
