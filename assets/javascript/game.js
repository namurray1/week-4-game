$(document).ready(function() {

// Game variables
var vader;
var sidious;
var renn;
var maul;
var randomNumber = 0;
var score = 0;
var wins = 0;
var losses = 0;

// This will reset the game!

//resetGame();

//Sith Lord funtion

function setUp() {
  randomNumber = Math.floor(Math.random()*(120-19 + 19));
  vader = Math.floor(Math.random()*(12-1) +1);
  sidious = Math.floor(Math.random()*(12-1) +1);
  renn = Math.floor(Math.random()*(12-1) +1);
  maul = Math.floor(Math.random()*(12-1) +1);
  
  
}
function getRandom() {
  $("#sith").map(function() {
    $(this).data("number", randomNumber());
    console.log($(this).data());
  });
}
/*function getRandom() {
  $("#sidious").map(function() {
    $(this).data("number", randomNumber());
    console.log($(this).data());
  });
}
function getRandom() {
  $("#kylorenn").map(function() {
    $(this).data("number", randomNumber());
    console.log($(this).data());
  });
}
function getRandom() {
  $("#maul").map(function() {
    $(this).data("number", randomNumber());
    console.log($(this).data());
  });
}

var randomNumber = randomNumberToGet();
$("#randomNumber").html(randomNumber);

getRandom();

    $("#vader").click(function(){
      score += $(this).data("number");
    $("#your-score").html(score);
    console.log(score);
*/
    

  

//Check for outcome of the click=============================================

    function outcome() {
    if(score===randomNumber){
      $("#wins").html("Wins: " + wins);
      wins++;
      score = 0;
      //randomNumber = randomNumberToGet();
      $("theScore").html(score);
      $("#randomNumber").html(randomNumber);
      getRandom();
    }
    else if(score>randomNumber){
      losses++;
      $("#losses").html("Losses: " + losses);
      score = 0;
      $("theScore").html(score);
      $("#randomNumber").html(randomNumber);
      getRandom();
    }

    
  }
    
   
    });