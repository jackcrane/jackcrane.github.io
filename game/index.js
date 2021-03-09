const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let GameObject = {
  x:0,
  y:0,
  createImage:function(url) {
    let img = new Image;
    img.src = url;
    return img;
  },
  width:src.width,
  height:src.height,
}
