// Add extension JS in page
var s = document.createElement('script')
s.src = chrome.extension.getURL('javascript/included.js')
s.onload = function() {
    this.parentNode.removeChild(this)
}
document.head.appendChild(s)

// Add extension CSS in page
var ss = document.createElement('link')
ss.rel = 'stylesheet'
ss.href = chrome.extension.getURL('stylesheets/detail.css')
document.head.appendChild(ss)
