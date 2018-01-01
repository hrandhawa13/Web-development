var b1 = document.querySelector("#p1");
var b2 = document.querySelector("#p2");
var r = document.querySelector("#r");
var p1display = document.querySelector("#p1Score");
var p2display = document.querySelector("#p2Score");
var final = document.querySelector("input");
var winningScoreDisplay= document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;
b1.addEventListener("click",function(){
	if(!gameOver)
		p1score++;
		p1display.textContent = p1score ;
		if( p1score == winningScore){
			gameOver=true;
			p1display.classList.add("winner");
		}
});

b2.addEventListener("click",function(){
	if(!gameOver)
		p2score++;
		p2display.textContent = p2score ;
		if( p2score == winningScore){
			gameOver=true;
			p2display.classList.add("winner");
		}
});
r.addEventListener("click",function(){
	reset();
});
final.addEventListener("change", function(){
	winningScore = final.value;
	winningScoreDisplay.textContent=final.value;
	reset();
	});

function reset(){
	gameOver=false;
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p2display.classList.remove("winner");
	p1display.classList.remove("winner");
}