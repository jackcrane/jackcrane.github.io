var wrapper = document.querySelector('.wrapper svg')

// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}

function erase() {
  wrapper.classList.remove('active')
}

// Play draw animation once
setTimeout(draw, 300)

function pagechange(page) {
	document.getElementsByClassName("main")[0].style.opacity = "0"
    erase()
    setTimeout(function(){window.location.href=page + ".html"},3500)
}

function showlearnmore() {
	document.getElementById("learnmore").hidden = false
	document.getElementById("learnmore").style.opacity = "1"
}