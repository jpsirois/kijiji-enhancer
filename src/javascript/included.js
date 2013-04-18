init = function() {
  // Page: Ads listing
  if ($('#sbResultsListing').length) {
    $('.thumbImg').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })
  }

  // Page: Ad details
  if ($('#viewad_header').length) {
    $('.view').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_35.JPG', '~~48_20.JPG')) })
    $('.imageNavs .ni img').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })

    /* Replace zoomed image by their full resolution version {{{
     * when switch between ad images */

    // select the target node
    var target = document.querySelector('.view');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'src') {
          if ($('.view').attr('src').indexOf('~~48_35.JPG') != -1) {
            $('.view').attr('src', $('.view').attr('src').replace('~~48_35.JPG', '~~48_20.JPG'))
          }
        }
      });
    });

    // configuration of the observer:
    var config = { attributes: true, childList: false, characterData: false }

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

    /*}}}*/
  }
}
init()
