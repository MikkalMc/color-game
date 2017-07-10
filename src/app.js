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

//on load, change the rgb being displayed on title.
document.getElementById("rgb-text").addEventListener("load", displayRGB());

var squares = document.getElementsByClassName("square");
function setSquareRGB() {
	for (i=0; i<squares.length; i++) {
		var fetchColors = setColors();
		var squareRand = 'rgb' + fetchColors; 
		console.log(squareRand);
		squares[i].style.backgroundColor = squareRand;
	}
}
setSquareRGB();