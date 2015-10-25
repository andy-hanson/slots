all-same?. \_:@ fun:Function
	or empty?_
		fst = fun _[0]
		all? _ &(=? fst fun_)

round-down-to-nearest. \a b
	* b (int/ a b)
