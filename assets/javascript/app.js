$(document).ready(function() {

//start the game
$("#start").on("click", start); 

//submit answers if done before timer goes off
$("#submit").on("click", submit); 
//resets the game
$("#playAgain").on("click", playAgain); 
//declare variables for right and wrong


//when js is on the global scope, it fires on page load.


//make different windows and decide when to hide and show
/*function toggle() {
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
	}
} 
*/

function reset() {
	

// number right and wrong resets to zero...need to create these variables
// checked answers need to be erased
// reset hides questions, just shows start button

}
// function for start button, starts the countdown timer:
function start() {
var myVar = setInterval(myTimer, 1000);

var countDown = 30

function myTimer() {
    countDown --
    document.getElementById("timeRemaining").innerHTML = countDown;
    if (countDown === 0) {
    	console.log("TIME'S UP!");
    	alert("TIME'S UP!")
    	clearInterval(myVar);    //the name of my interval is 'myVar'
    }
    

};
 };
});



// questions are revealed
// submit button is revealed


// click submit button...hide questions and show number right and wrong



// when time runs out...same function as clicking submit


