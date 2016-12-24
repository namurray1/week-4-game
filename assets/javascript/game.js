$(document).ready(function(){

// Game variables

var sithArray = [];
var vader;
var sidious;
var renn;
var maul;
var randomNumber;
var score;
var wins=0;
var losses=0;

// This will reset the game!

//resetGame();

//Sith Lord funtion

function setUp(){
  randomNumber = Math.floor(Math.random()*120+19);
  vader = Math.floor(Math.random()*12+1);
  sidious = Math.floor(Math.random()*12+1);
  renn = Math.floor(Math.random()*12+1);
  maul = Math.floor(Math.random()*12+1);
  score=0;
  $("#number").html(number);
  console.log("vader: "+vader);
  console.log("sidious: "+sidious);
  console.log("renn: "+renn);
  console.log("maul: "+maul);
}

//Check for outcome of the click=============================================

  function outcome(){
    if(score===randomNumber){
      $(".outcome").html("YOU ARE STRONG WITH THE FORCE! EMBRANCE THE DARK SIDE");
      wins++;
      $("#score").empty();
      setUp();
    }
    else if(score>randomNumber){
      $(".outcome").html("JEDI SCUM!");
      losses++;
      $("#score").empty();
      setUp();
    }

    $("#wins").html("Wins: "+wins);
    $("#losses").html("Losses: "+losses);
  }



// Gameplay

function playGame(){
    $(button1).click(function(){
      valueIncrease(vader);
      /*click.play();
      score+=vader;
      $("#score").html(score);
      outcome();
      */
    });
  }

    $("#sidious").on("click", function(){
      click.play();
      score+=vader;
      $("#score").html(score);
      outcome();
      
    });
  

    $("#renn").on("click", function(){
      click.play();
      score+=renn;
      $("#score").html(score);
      outcome();
      console.log("score: " +score);
    });

    $("#maul").on("click", function(){
      click.play();
      score+=maul;
      $("#score").html(score);
      outcome();
      console.log("score: " +score);
    });

}

// Game set up

setUp();
playGame();
console.log("number:" +number);

});