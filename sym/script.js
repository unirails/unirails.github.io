const image = document.querySelector('#image');
const viewer = new ImageViewer(image);
viewer.load('sym.png', 'sym.png');
viewer.zoom(100, { x: 500, y: 500 });
// document.getElementById("image").classList.add('.img-fluid');

viewer.refresh();
