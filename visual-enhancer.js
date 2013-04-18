resizeThumbnails = function() {
  $('.thumbImg').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })
}
resizeThumbnails()

// TODO @jpsirois: This is an Ugly way to be sure all the stuff is loaded
window.setTimeout(removeAds, 1000)
window.setTimeout(removeAds, 3000)
window.setTimeout(removeAds, 5000)
