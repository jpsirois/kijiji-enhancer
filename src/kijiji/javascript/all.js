init = function() {

  /* Lang Detection & Config {{{*/

  currentLang = $('meta[name="DCSext.locale"]').attr('content')
  loadingText = currentLang == 'en_CA' ? 'Loading next ads…' : 'Chargement des annonces suivantes…'

  /*}}}*/

  /* OS Detection {{{*/
  if (navigator.platform.indexOf("Win")!=-1) {
    $('html').addClass('windows')
  }
  /*}}}*/

  /* Page: Category listing {{{*/

  if ($('#gpt-rightrail-top').length) {
    // Remove useless random ad gallery
    $('#AdGallery, #GalleryContainer').remove()

    // Remove Ads
    $('#gpt-rightrail-top').parents('.col-2').each(function(){
      var $this = $(this)
      $this.next('.col-1').removeClass('col-1')
      $(this).remove()
    })

    // Remove random useless ads on home
    $('#hpgctr').remove().after('br').remove()
  }

  /*}}}*/

/* Page: Ads listing (browsing, my favorite, all user ads) {{{*/

  // if ($('#sbResultsListing').length || $('.adsTable').length || $('#tableDefault').length) {
  if ($('.container-results').length) {

    /* ListingOnload {{{*/

    var loadedAds = Array(),
    listingOnload = function() {
      // Remove Ads
      $('#gpt-leaderboard-top, #gpt-leaderboard-base, #gpt-minileaderboard-base, #InlineBanner, .skyscraper').remove()

      // Remove Commercial Ads
      $('.adsense-top-bar, .adsense-container').remove()

      // Remove Useless Popular search word
      $('.popWords').remove()

      listingOnNewContent()
    },

    /*}}}*/

    /* ListingOnNewContent {{{*/

    listingOnNewContent = function() {
      // Removed double & enable CMD/CTRL + Click
      // FIXME
      // $('.container-results table:not(.enhanced) a').unbind('click')
      // $('.container-results table:not(.enhanced)').each(function(){
      //   var $this = $(this),
      //   adLink = $this.find('a.title').attr('href')

      //   if (loadedAds.indexOf(adLink) !== -1) {
      //     $this.remove()
      //     return
      //   }

      //   // $this.addClass('enhanced')
      //   $this.find('td').wrapInner('<a class="nomorebroken" href="' + adLink + '" />')
      //   loadedAds.push(adLink)
      // })
      // $('.container-results table:not(.enhanced) td .image img').unwrap()
      // $('.container-results table:not(.enhanced) .title').replaceWith(function () {
      //   return $('<span class="title" />').append($(this).contents());
      // });

      // Enlarge listing thumbnails
      $('.image img').each(function(){
        $(this).attr('src', $(this).attr('src').replace(/_[2|14]\.JPG/, '_35.JPG'))
      })
    }

    /*}}}*/

    /* InfiniteScroll {{{*/
    $('.container-results .bottom-bar').hide()
    $('.container-results .srp-bottom-links').remove()

    $('.container-results').infinitescroll({
      navSelector  : ".bottom-bar .pagination",
      nextSelector : ".bottom-bar .pagination a[title]:first",
      itemSelector : ".container-results > table",
      bufferPx     : 2000,
      loading      : {
        msg: $('<tr><td colspan="5"><p class="infinite-scroll-loading"><img src="data:image/gif;base64,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" /> ' + loadingText + '</p></td></tr>')
      },
      pathParse    : function(path){
        if (path.match(/^(.*page\-).*(\/.*$)/)) {
          return path.match(/^(.*page\-).*(\/.*$)/).slice(1);
        } 
      }
    },function(a){
      listingOnNewContent()
    });

    /*}}}*/

    listingOnload()

  }

  /*}}}*/

  /* Page: Ad details {{{*/
  if ($('#PageVIP').length) {

    var $imageGallery = $('.VAStyleA .gallery')

    /* Remove Ads {{{*/

    // Remove sidebar Ads
    $('#GPTBigbox').remove()

    // Remove Desjardins Ads Car insurance tab
    $('.viewAdTabs li').eq(2).remove()
    $('#tab2').remove()

    // Remoce under ads image ads links
    $('#ImageSponsors').remove()

    // Remove Commercials links
    $('.adsense-top-bar, .adsense-container').remove()

    /*}}}*/

    /* Resize image gallery {{{*/

    resizeAdImg = function(){

      $('#ShownImage img').each(function(){
        var $this = $(this)
        $this.attr('src', $this.attr('src').replace('_35.JPG', '_20.JPG'))

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

    $('#ImageThumbnails img').each(function(){
      $(this).attr('src', $(this).attr('src').replace('_14.JPG', '_35.JPG'))
    })

    /* Replace zoomed image by their full resolution version {{{
     * when switch between ad images */

    // select the target node
    var target = document.querySelector('#ShownImage');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'src') {
          if ($('.view').attr('src').indexOf('_35.JPG') != -1) {
            var $this = $('.view')
            $this.attr('src', $this.attr('src').replace('_35.JPG', '_20.JPG'))
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

  // If we're posting an ad
  if($('#ImageUpload').length) {
    var imgUploadDiv = $("#ImageUpload");

    window.addEventListener("message", function(event) {
      if(event.data.type === "downloadImageRequest")
        imgUploadDiv.fileupload('add', {files: event.data.image});
    });
  }
}
init()
