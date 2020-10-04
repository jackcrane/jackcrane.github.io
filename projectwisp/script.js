const SLIDES_MAP = {
	0: "WiSP_conceptLogo.jpg",
	1: "1.PNG",
	2: "2.jpg",
	3: "3.png",
	4: "4.png",
	5: "5.png",
	6: "6.jpg",
}
function numberToSrc(number){
	console.log(SLIDES_MAP[number])
	document.getElementById("slideshow").src = SLIDES_MAP[number]
}
var currentSlide = 0
var maxSlides = 6

function lastslide() {
	if(currentSlide!=0) {
		currentSlide -= 1
		numberToSrc(currentSlide)
		console.log(currentSlide)
	} else {
		currentSlide = maxSlides
		numberToSrc(currentSlide)
		console.log(currentSlide)
	}
}

function nextslide() {
	if(currentSlide!=maxSlides) {
		currentSlide += 1
		numberToSrc(currentSlide)
		console.log(currentSlide)
	} else {
		currentSlide = 0
		numberToSrc(currentSlide)
		console.log(currentSlide)
	}
}