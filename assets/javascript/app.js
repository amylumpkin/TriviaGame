$(document).ready(function() {

//start the game
$("#start").on("click", start); 

//submit answers if done before timer goes off
$("#submit").on("click", submit); 
//resets the game
$("#playAgain").on("click", playAgain); 

$("input").on("click",function(){
	console.log(this.className);
});
//make values display on browser within the HTML:
var correct = 0;
var incorrect = 0;

$("#numberCorrect").text(correct);
$("#numberIncorrect").text(incorrect);
console.log(correct);
console.log(incorrect);

//if a correct answer is chosen, ++1 to variable 'correct'
//else, ++1 to variable 'incorrect'

	
// number right and wrong resets to zero...need to create these variables
// checked answers need to be erased
// reset hides questions, just shows start button

// function for start button, starts the countdown timer:
function start() {
var myVar = setInterval(myTimer, 1000);

var countDown = 3

function myTimer() {
    countDown --
    document.getElementById("timeRemaining").innerHTML = countDown;
    if (countDown === 0) {
    	console.log("TIME'S UP!");
    	$(".questions").css("display","none");
    	clearInterval(myVar);    //the name of my interval is 'myVar'
    };
   };
  };  
});

// questions are revealed
// submit button is revealed

// when time runs out...same function as clicking submit


