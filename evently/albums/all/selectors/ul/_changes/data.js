function(data) {
  // $.log(data)
  return {
	albums: data.rows.map(function(r) {
      var v = r.value;

      var desID = v.path;
  	  desID.push(v._id);

      return { 
	    "id": v._id, 
	    "name": v.name,
        "next_path": desID 
      };
    })
  };
};