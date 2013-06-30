init = function() {
  /* OS Detection {{{*/
  if (navigator.platform.indexOf("Win")!=-1) {
    $('html').addClass('windows')
  }
  /*}}}*/

  /* Page: Category listing {{{*/

  if ($('.area-home-pg').length) {
    // Remove Ads
    $('.ahRht').remove()

    // Remove random useless ads on home
    $('#hpgctr').remove().after('br').remove()
  }

  /*}}}*/

/* Page: Ads listing {{{*/

  if ($('#sbResultsListing').length) {

    // Remove Ads
    $('.sbBucket, #topAdSense, #bottomAdSense, #bottomAdCCBucket').remove()
    $('#inlineBanner').parents('.resultsTableSB').remove()
    $('#adlink').next('p').next('div').remove()
    $('.paginationBottomBg').next('div').remove()

    // Remove Useless Popular search word
    $('.popWords').remove()

    // Enable CMD/CTRL + Click
    $('#SNB_Results tr.resultsTableSB').each(function(){
      $this = $(this)
      adLink = $this.find('.adLinkSB').attr('href')
      $this.find('td').wrapInner('<a class="nomorebroken" href="' + adLink + '" />')
    })
    $('#SNB_Results td img.thumbImg').unwrap()
    $('#SNB_Results .adLinkSB').replaceWith(function () {
      return $('<span class="adLinkSB" />').append($(this).contents());
    });
    $('#SNB_Results td').unbind('click')

    // Enlarge listing thumbnails
    $('.thumbImg').each(function(){  $(this).attr('src', $(this).attr('src').replace('~~48_14.JPG', '~~48_35.JPG')) })

  }

  /*}}}*/

  /* Page: Ad details {{{*/
  if ($('#viewad_header').length) {

    var $imageGallery = $('.VAStyleA .gallery')

    // Remove Ads
    $('#viewad-textlinks, #googsense').remove()
    $('#CarTips').next('div').remove()

    /* Resize image gallery {{{*/

    resizeAdImg = function(){

      $('.view').each(function(){
        var $this = $(this)
        $this.attr('src', $this.attr('src').replace('~~48_35.JPG', '~~48_20.JPG'))

        var thisRatio = ($this.height() / $this.width() * 100)

        if (thisRatio > 75) {
          thisRatio = '75'
          $this.css({
            'width': 'auto',
            'height': '100%'
          })
        } else {
          $this.css({
            'width': '100%',
            'height': 'auto'
          })
        }
        $imageGallery.css('padding-bottom', '75%')
      })
    }

    resizeAdImg()

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
            var $this = $('.view')
            $this.attr('src', $this.attr('src').replace('~~48_35.JPG', '~~48_20.JPG'))
            resizeAdImg()
            setTimeout(function(){ resizeAdImg() }, 250)
            setTimeout(function(){ resizeAdImg() }, 500)
            setTimeout(function(){ resizeAdImg() }, 750)
            setTimeout(function(){ resizeAdImg() }, 100)
          }
        }
      });
    });

    // configuration of the observer:
    var config = { attributes: true, childList: false, characterData: false }

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

    /*}}}*/

    /*}}}*/

    /* Add Image gallery keyboard navigation {{{*/

    var $nextBtn = $('.jsonly .prev'),
        $prevBtn = $('.jsonly .next')

    $('body').keydown(function(e) {
      if (e.which === 37) { $nextBtn.trigger('click') }
      if (e.which === 39) { $prevBtn.trigger('click') }
    })

    /*}}}*/
  }

  /*}}}*/
}
init()
