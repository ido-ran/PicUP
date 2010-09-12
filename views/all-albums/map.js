function(doc) {
  if (doc.type == "album") {
    emit(doc.path, doc);
  }
};