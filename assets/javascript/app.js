$(document).ready(function() {

$(".questions").css("display","none");
$(".results").css("display", "none");


//start the game
$("#start").on("click", start); 

//submit answers if done before timer goes off
//$("#submit").on("click", submit); 

var correct = 0;
var incorrect = 0;

$("input").on("click",function(){
  if (this.className === "correct"){
   ++ correct; 
   $("#numberCorrect").text(correct);
   console.log(correct);
  }
  else {
  console.log(this.className);
   ++ incorrect;
   $("#numberIncorrect").text(incorrect);
   console.log(incorrect);
}
});
//make values display on browser within the HTML:






// function for start button, starts the countdown timer:
function start() {
var myVar = setInterval(myTimer, 1000);

var countDown = 30

$(".questions").css("display", "block");

  function myTimer() {
    countDown --
    document.getElementById("timeRemaining").innerHTML = countDown;
    if (countDown === 0) {
      console.log("timer reached zero");
      $(".questions").css("display","none");
      $(".results").css("display", "block");
      clearInterval(myVar);    //the name of my interval is 'myVar'
    };
  };
}; 

//function for submit button
   function submit() {

    

    $(".questions").css("display","none");
      $(".results").css("display", "block");
      
      console.log("clicked submit button");
    }


});

// questions are revealed
// submit button is revealed

// when time runs out...same function as clicking submit
