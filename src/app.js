function randomRGB() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

function setColors() {
    var randRed = randomRGB();
    var randGreen = randomRGB();
    var randBlue = randomRGB();
    var setRGB = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
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
console.log(globalRGB);


//append globalRGB to the title
function displayRGB() {
    document.getElementById("rgb-text").innerHTML += globalRGB;
    document.getElementById("title-bar").style.backgroundColor = globalRGB;
}

//on load, change the rgb being displayed on title.
document.getElementById("rgb-text").addEventListener("load", displayRGB());

var squares = document.getElementsByClassName("square");

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
// function assignChosenOne() {
// 	for (i = 0; i < squares.length; i++) {

// 	}
// }
