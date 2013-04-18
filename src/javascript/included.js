resizeThumbnails = function() {
  $('.thumbImg').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })
}
resizeThumbnails()
