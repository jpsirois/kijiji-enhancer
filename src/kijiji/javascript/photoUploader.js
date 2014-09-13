/*
* This content script is necessary because xhr requests would not
* be allowed web accessible scripts
* */

// If we're posting an ad
if($('#ImageUpload').length) {
  var imgUploadDiv = $("#ImageUpload");

  var urlTextBox = $('<input/>')
    .attr("placeholder", "Or enter an image's URL")
    .attr("type", "text");

  var downloadBtn = $('<button></button>')
    .attr("type", "submit")
    .text("Submit");

  var urlDownloadForm = $('<form></form>')
    .addClass("urlImageInput")
    .append(urlTextBox)
    .append(downloadBtn);


  urlDownloadForm.submit(function(e){
    e.preventDefault();

    var url = urlTextBox.val();
    urlTextBox.val("");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      if (this.status == 200) {
        blob = this.response;

        window.postMessage({type: "downloadImageRequest", image:blob}, "*");
      }
    };

    xhr.send();
  });

  imgUploadDiv.find('.file-input-buttons').append(urlDownloadForm);
}