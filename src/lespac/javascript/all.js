init = function() {
  /* Page: Ads listing {{{*/

  // Add support for CMD (CTRL) + Click for opening in new tab
  $('.ad_picture a, .ad_more_picture a').removeAttr('onclick')

  // Resize Main Listing Image
  $('.ad_picture a img').each(function(){  $(this).attr('src', $(this).attr('src').replace('/photo/', '/grandephoto/')) })

  // Resize Sub Listing Image
  $('.ad_more_picture img').each(function(){  $(this).attr('src', $(this).attr('src').replace('/thumb/', '/photo/')) })

  /*}}}*/
}
init()
