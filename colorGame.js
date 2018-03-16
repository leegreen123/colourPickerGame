var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetbutton.addEventListener("click", function() {
	reset();
});

function init() {
	setModeButtons();
	setSqaures();
}

function setModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setSqaures(){
	for(var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbutton.textContent = "Play Again"
		} else {
			this.style.backgroundColor = "#24272b";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetbutton.textContent = "New Colours"

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	//loop through squares to change color 
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//pick a random color from the color array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//get random color and push into array
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() {
	//generate random color 
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

// resetbutton.addEventListener("click", function() {
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	this.textcontent = "New Colours"
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });