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

//declare variables for right and wrong


//when js is on the global scope, it fires on page load.


//make different windows and decide when to hide and show
/*function toggle() {.  
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}										?????
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

var countDown = 3

function myTimer() {
    countDown --
    document.getElementById("timeRemaining").innerHTML = countDown;
    if (countDown === 0) {
    	console.log("TIME'S UP!");
    	$(".container").css("display","none");
    	clearInterval(myVar);    //the name of my interval is 'myVar'
    };
   };
  };  
});

function submit() {

}

 //trying to mark correct and incorrect answers

 /*var answers = ["a","b","c","d"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}
});

*/

// questions are revealed
// submit button is revealed


// click submit button...hide questions and show number right and wrong



// when time runs out...same function as clicking submit


