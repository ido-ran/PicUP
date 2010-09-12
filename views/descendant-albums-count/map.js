function(doc)   {
	if (doc.type == "album") {
		for    (var   i    in   doc.path)    {   
			emit(doc.path[i], 1);
		}
	}
}