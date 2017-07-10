function randomRGB() {
	 return Math.floor(Math.random() * (255 - 0) + 0);
}

function setColors() {
	var randRed  = randomRGB();
	var randGreen = randomRGB();
	var randBlue = randomRGB();
	var setRGB = "(" + randRed + "," + randGreen + "," + randBlue + ")";
	return setRGB;	
}

function displayRGB() {
	var myRGB = setColors();
	document.getElementById("rgb-text").innerHTML += myRGB;
}

document.getElementById("rgb-text").addEventListener("load", displayRGB());
//change.