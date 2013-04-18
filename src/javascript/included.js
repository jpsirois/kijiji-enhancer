init = function() {
  // Page: Ads listing
  if ($('#sbResultsListing').length) {
    $('.thumbImg').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })
  }

  // Page: Ad details
  if ($('#viewad_header').length) {
    $('.view').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_35.JPG', '~~48_20.JPG')) })
    $('.imageNavs .ni img').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })
  }
}
init()
