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
    setTimeout(function(){window.location.href=page},3500)
}

function showlearnmore() {
	document.getElementById("learnmore").hidden = false
	document.getElementById("learnmore").style.opacity = "1"
}

function verifyCookies() {
	if(!navigator.cookieEnabled) {
		document.getElementsByClassName("warn")[0].hidden = false;
		let inputs = document.getElementsByTagName("input")
		inputs = Array.from(inputs)
		inputs.forEach(element => element.disabled = "true")
		inputs = document.getElementsByTagName("select")
		inputs = Array.from(inputs)
		inputs.forEach(element => element.disabled = "true")
	}
}

verifyCookies()

function cookieRsn() {
	alert("Educated uses cookies to verify a user has not voted on a site before. This helps to protect the integrity of our results.\n\nIf you are not okay with this, fear not. Just do not submit, and we will never use cookies anywhere else")
}
var url
var rank
function submitVerify() {
	url = document.getElementById("url").value.toString()
	rank = document.getElementById("rank").value.toString()
	
	if(getCookie(url)==undefined) {
		console.log("ok, writing")
		document.cookie = window['url'] + " ="+rank+"; expires=Thu, 18 Dec 2099 12:00:00 UTC";
		document.getElementById("valid").value = "true"
	} else {
		console.log("already present")
		document.getElementById("valid").value = "false"
	}

	document.getElementsByTagName("form")[0].submit()
}

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}