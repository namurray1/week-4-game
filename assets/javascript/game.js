// Global Game Variables

var vader;
var sidious;
var renn;
var maul;
var randomNumber;
var score = 0;
var wins = 0;
var losses = 0;

// Functions

$(document).ready(function() {

  function startGame() {

//Random Numbers

  randomNumber = Math.floor(Math.random()* 120 ) + 19;
  vader = Math.floor(Math.random()* 12 ) +1;
  sidious = Math.floor(Math.random()* 12 ) +1;
  renn = Math.floor(Math.random()* 12 ) +1;
  maul = Math.floor(Math.random()* 12 ) +1;
  score = 0;

  //HTML Elements

  $('#randomNumber').html(randomNumber);
  $('.1').data('vader');
  $('.2').data('sidious');
  $('.3').data('renn');
  $('.4').data('maul');
  $('userScore').html('score');

  //Console Test and debugging. As of 12/26/2016 everything is working!

  console.log(randomNumber);
  console.log(vader);
  console.log(sidious);
  console.log(renn);
  console.log(maul);

$('.1').on('click', function () {
  console.log(vader);
});

$('.2').on('click', function () {
  console.log(sidious);
});

$('.3').on('click', function () {
  console.log(renn);
});

$('.4').on('click', function () {
  console.log(maul);
});

}

function userTotals () {

  $('.1').on('click', function (){
    score += vader;
    $('#score').html(score);
    checkScore();
  });

  $('.2').on('click', function (){
    score += sidious;
    $('#score').html(score);
    checkScore();
  });

$('.3').on('click', function (){
    score += renn;
    $('#score').html(score);
    checkScore();
  });

$('.4').on('click', function (){
    score += maul;
    $('#score').html(score);
    checkScore();
  });

}

// (If/Else) statements for calculating wins and losses

    function checkScore()  {


    if(score === randomNumber){

      
      $('#wins').html(' ' + wins);
      wins++;
      startGame();

    } else if(score > randomNumber) {

      $('#losses').html(' ' + losses);
      losses++;
      startGame();

    }

}

      startGame();
      userTotals();
});