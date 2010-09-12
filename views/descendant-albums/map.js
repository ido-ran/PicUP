function(doc)   {
	if (doc.type == "album") {
		for    (var   i    in   doc.path)    {   
			emit([doc.path[i],    doc.path],   doc); 
		}
	}
}