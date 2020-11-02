let images = ["http://teardowngame.com/images/s2.jpg","http://teardowngame.com/images/s3.jpg","http://teardowngame.com/images/s4.jpg","http://teardowngame.com/images/s5.jpg","http://teardowngame.com/images/s6.jpg"]

for(let i = 0; i < images.length; i++) {
  document.body.style.backgroundImage.src = images[i];
}
