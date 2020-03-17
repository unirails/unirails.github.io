function sizeContent() {
  var navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  var screenHeight = document.getElementsByTagName('body')[0].clientHeight;
  var screenWidth = document.getElementsByTagName('body')[0].clientWidth;
  // document.getElementById('image').style.height = screenHeight-navHeight + "px";
  // document.getElementById('image').style.width = screenWidth + "px";
  document.getElementsByClassName('iv-container')[0].style.height = screenHeight-navHeight + "px";
  document.getElementsByClassName('iv-container')[0].style.width = screenWidth + "px";
  document.getElementsByClassName('iv-image')[0].style.height = screenHeight-navHeight + "px";
  // document.getElementsByClassName('iv-image')[0].style.width = screenWidth + "px";
}

const image = document.querySelector('#image');
const viewer = new ImageViewer(image);
viewer.load('sym.png', 'sym.png');
viewer.zoom(100, { x: 500, y: 500 });
// document.getElementById("image").classList.add('.img-fluid');

sizeContent();
