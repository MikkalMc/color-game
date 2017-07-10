function randomRGB() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

function setColors() {
    var randRed = randomRGB();
    var randGreen = randomRGB();
    var randBlue = randomRGB();
    var setRGB = "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";
    return setRGB;
}
//set game mode hard/easy
//** IN PROGRESS
var hardMode = true;

//define 'key' to be used to identify which square is the correct one
var key;

function createKey(gameMode) {
    if (hardMode) {
        key = Math.floor(Math.random() * (7 - 0));
    } else {
        key = Math.floor(Math.random() * (4 - 0));
    }
}
createKey();
console.log(key);

//global 'answer' RGB
var globalRGB = setColors();
console.log("global " + globalRGB);


//append globalRGB to the title
function displayRGB() {
    document.getElementById("rgb-text").innerHTML += globalRGB;
}

//on load, change the rgb being displayed on title.
document.getElementById("rgb-text").addEventListener("load", displayRGB());

var squares = document.getElementsByClassName("square");
var squaresObject = {

}

function setSquareRGB() {
    for (i = 0; i < squares.length; i++) {
        var squareRand = setColors();
        // console.log(squareRand);
        if (i === key) {
            squares[i].style.backgroundColor = globalRGB;
        } else {
            squares[i].style.backgroundColor = squareRand;
        }
    }
}
setSquareRGB();

//handle all the onclick functions 
document.addEventListener('click',function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	var targetRGB = target.style.backgroundColor;
	if(targetRGB == globalRGB) {
		document.getElementById("rgb-text").innerHTML = "YOU WIN";
		document.getElementById("title-bar").style.backgroundColor = globalRGB;
		console.log("win");
	} else {
		console.log("no " + targetRGB + "||" + globalRGB );
	}
});
