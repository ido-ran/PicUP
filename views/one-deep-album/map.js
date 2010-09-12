function(doc) { 
	if (doc.type == "album") {
		emit([doc.path.slice(-2,-1)[0], doc.path], doc);
	}
}