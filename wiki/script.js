// console.log(navHeight);
// console.log(screenHeight);

function sizeContent() {
  var navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  var screenHeight = document.getElementsByTagName('body')[0].clientHeight;
  document.getElementsByClassName('content')[0].style.height = screenHeight-navHeight + "px";
  document.getElementById('wiki').style.height = screenHeight-navHeight + "px";
}
