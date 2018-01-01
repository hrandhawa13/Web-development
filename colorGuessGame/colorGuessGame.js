var num = 6;
var colors;
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay =  document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
setupModeButtons();
startGame();

/*
This function will start the game logic
*/
function startGame(){
	initialSetup();
	setupSquares();
	resetButton.textContent = "New Colors!";
}
/*
This function does the initial cleaning for the game to start
*/
function initialSetup(){
	colors = generateRandomColors();
	correctColor = pickRandomColor();
	colorDisplay.textContent = correctColor;
	h1.style.backgroundColor= "steelblue";
	if ( num == 3 )
		removeSquares();
}
/*
THis function will setup the squares and add listeners to these squares 
*/
function setupSquares(){
	for( var i = 0; i < num; i++){
		//add initial colors to the squares
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		//add event listeners to the squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if( clickedColor == correctColor ){//right guess then bring all the colors back and remove all the listeners 
				gameOver();
			}
			else{//vanish the square is is set to bg color of body
				this.style.backgroundColor="#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
/*
This function will remove the last 3 squares 
*/
function removeSquares(){
	for( var i =3; i<squares.length; i++ ){
		squares[i].style.display = "none";
	}
}
/*
This function will bring all the vanished colors back
*/
function gameOver(){
	changeColors();
	h1.style.backgroundColor = correctColor;
	messageDisplay.textContent = "Correct";
	resetButton.textContent = "Play Again";
}
/*
This function will change colors of all the squares
*/
function changeColors(){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = correctColor;
	}
}

/*
This function generates an array of num length with radom colors
*/
function generateRandomColors(){
	var arr = [];
	for( var i = 0; i < num; i++ ){//get random color and push to array
		arr.push(randomColor());
	}
	return arr;
}
/*
This function generates a random color
*/
function randomColor(){
	var r = Math.floor(Math.random() * 256 );
	var g = Math.floor(Math.random() * 256 );
	var b = Math.floor(Math.random() * 256 );
	return "rgb("+r+", " + g +", " +b + ")";
}
/*
This function will pick a random color from the array of colors
*/
function pickRandomColor(){
	var index = Math.floor( Math.random()* colors.length );
	return colors[index];
}
/*
This function will add the event listeners to the mode buttons
*/
function setupModeButtons(){
	for ( var i = 0; i < modeButtons.length; i++ ){
		modeButtons[i].addEventListener("click", function(){
			removeAllClasses();
			this.classList.add("selected"); 
			this.textContent === "Easy" ? num=3: num=6;
			startGame(num);
		});
	}
}
/*
This function will remove the selected class from all the buttons
*/
function removeAllClasses() {
	for( var i =0; i< modeButtons.length; i++ )
		modeButtons[i].classList.remove("selected");
}
/*
adding event listener to reset button 
*/
resetButton.addEventListener("click", function(){
	startGame();
	messageDisplay.textContent ="";
	this.textContent="New Colors";
});