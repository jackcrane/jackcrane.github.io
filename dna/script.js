const DNA_MAP = {
	a: "<img src='yellow.png'><img src='purple.png'><img src='red.png'><br>",
	b: "<img src='yellow.png'><img src='purple.png'><img src='white.png'><br>",
	c: "<img src='red.png'><img src='yellow.png'><img src='purple.png'><br>",
	d: "<img src='yellow.png'><img src='white.png'><img src='red.png'><br>",
	e: "<img src='yellow.png'><img src='white.png'><img src='yellow.png'><br>",
	f: "<img src='red.png'><img src='red.png'><img src='red.png'><br>",
	g: "<img src='yellow.png'><img src='yellow.png'><img src='yellow.png'><br>",
	h: "<img src='purple.png'><img src='white.png'><img src='red.png'><br>",
	i: "<img src='white.png'><img src='red.png'><img src='white.png'><br>",
	j: "<img src='white.png'><img src='red.png'><img src='purple.png'><br>",
	k: "<img src='white.png'><img src='white.png'><img src='yellow.png'><br>",
	l: "<img src='purple.png'><img src='red.png'><img src='purple.png'><br>",
	m: "<img src='white.png'><img src='red.png'><img src='yellow.png'><br>",
	n: "<img src='yellow.png'><img src='white.png'><img src='purple.png'><br>",
	o: "<img src='yellow.png'><img src='white.png'><img src='red.png'><br>",
	p: "<img src='purple.png'><img src='purple.png'><img src='purple.png'><br>",
	q: "<img src='yellow.png'><img src='white.png'><img src='yellow.png'><br>",
	r: "<img src='purple.png'><img src='yellow.png'><img src='red.png'><br>",
	s: "<img src='red.png'><img src='purple.png'><img src='white.png'><br>",
	t: "<img src='white.png'><img src='purple.png'><img src='red.png'><br>",
	u: "<img src='white.png'><img src='purple.png'><img src='yellow.png'><br>",
	v: "<img src='yellow.png'><img src='red.png'><img src='purple.png'><br>",
	w: "<img src='red.png'><img src='yellow.png'><img src='yellow.png'><br>",
	x: "<img src='yellow.png'><img src='red.png'><img src='white.png'><br>",
	y: "<img src='red.png'><img src='white.png'><img src='purple.png'><br>",
	z: "<img src='red.png'><img src='white.png'><img src='red.png'><br>",
	_: "<br><br><br>"
}

function letterToDna(letter){
	const letterLower = letter.toLowerCase()
	console.log(DNA_MAP[letter])
	document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + DNA_MAP[letter]
}

function trans() {
	document.getElementById("container").innerHTML = ""
	var msg = document.getElementById("msg").value
	var length = msg.length
		if(msg.charAt(0)!="") {
			letterToDna(msg.charAt(0))
		} else {}
		if(msg.charAt(1)!="") {
			letterToDna(msg.charAt(1))
		} else {}
		if(msg.charAt(2)!="") {
			letterToDna(msg.charAt(2))
		} else {}
		if(msg.charAt(3)!="") {
			letterToDna(msg.charAt(3))
		} else {}
		if(msg.charAt(4)!="") {
			letterToDna(msg.charAt(4))
		} else {}
		if(msg.charAt(5)!="") {
			letterToDna(msg.charAt(5))
		} else {}
		if(msg.charAt(6)!="") {
			letterToDna(msg.charAt(6))
		} else {}
		if(msg.charAt(7)!="") {
			letterToDna(msg.charAt(7))
		} else {}
		if(msg.charAt(8)!="") {
			letterToDna(msg.charAt(8))
		} else {}
		if(msg.charAt(9)!="") {
			letterToDna(msg.charAt(9))
		} else {}
		if(msg.charAt(10)!="") {
			letterToDna(msg.charAt(10))
		} else {}
		if(msg.charAt(11)!="") {
			letterToDna(msg.charAt(11))
		} else {}
		if(msg.charAt(12)!="") {
			letterToDna(msg.charAt(12))
		} else {}
		if(msg.charAt(13)!="") {
			letterToDna(msg.charAt(13))
		} else {}
		if(msg.charAt(14)!="") {
			letterToDna(msg.charAt(14))
		} else {}
		if(msg.charAt(15)!="") {
			letterToDna(msg.charAt(15))
		} else {}
		if(msg.charAt(16)!="") {
			letterToDna(msg.charAt(10))
		} else {}
		if(msg.charAt(17)!="") {
			letterToDna(msg.charAt(11))
		} else {}
		if(msg.charAt(18)!="") {
			letterToDna(msg.charAt(12))
		} else {}
		if(msg.charAt(19)!="") {
			letterToDna(msg.charAt(13))
		} else {}
		if(msg.charAt(20)!="") {
			letterToDna(msg.charAt(0))
		} else {}
		if(msg.charAt(21)!="") {
			letterToDna(msg.charAt(1))
		} else {}
		if(msg.charAt(22)!="") {
			letterToDna(msg.charAt(2))
		} else {}
		if(msg.charAt(3)!="") {
			letterToDna(msg.charAt(3))
		} else {}
		if(msg.charAt(24)!="") {
			letterToDna(msg.charAt(4))
		} else {}
		if(msg.charAt(25)!="") {
			letterToDna(msg.charAt(5))
		} else {}
		if(msg.charAt(26)!="") {
			letterToDna(msg.charAt(6))
		} else {}
		if(msg.charAt(27)!="") {
			letterToDna(msg.charAt(7))
		} else {}
		if(msg.charAt(28)!="") {
			letterToDna(msg.charAt(8))
		} else {}
		if(msg.charAt(29)!="") {
			letterToDna(msg.charAt(9))
		} else {}
		if(msg.charAt(30)!="") {
			letterToDna(msg.charAt(10))
		} else {}
		if(msg.charAt(31)!="") {
			letterToDna(msg.charAt(11))
		} else {}
		if(msg.charAt(32)!="") {
			letterToDna(msg.charAt(12))
		} else {}
		if(msg.charAt(33)!="") {
			letterToDna(msg.charAt(13))
		} else {}
		if(msg.charAt(34)!="") {
			letterToDna(msg.charAt(14))
		} else {}
		if(msg.charAt(35)!="") {
			letterToDna(msg.charAt(15))
		} else {}
		if(msg.charAt(36)!="") {
			letterToDna(msg.charAt(10))
		} else {}
		if(msg.charAt(37)!="") {
			letterToDna(msg.charAt(11))
		} else {}
		if(msg.charAt(38)!="") {
			letterToDna(msg.charAt(12))
		} else {}
		if(msg.charAt(39)!="") {
			letterToDna(msg.charAt(13))
		} else {}
		if(msg.length>=40) {
			alert("ERROR: only 40 characters are supported.")
		} else {}
}