function(e) {
  var params = e.data.args[1];
  var album_path_str = params.album_path;
  var album_path_arr = album_path_str && album_path_str.split(',') || [];

  return {
    view : "all-albums",
    limit : 25,
    startkey : album_path_arr,
    endkey : album_path_arr
  }
}
