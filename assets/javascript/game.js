/*var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //is the array for the letters
var randomLetter = Math.floor(Math.random() * letters.length - 1);
var computersPick = letters[randomLetter]; // holds the random letter to be guessed
var wins = 0;
var losses = 0;
var guessRemaining = 10;
var guesses = [];
var gameOver = false;
//var higherOrLower = " "; // holds the text for higher or lower relative to the user's guess

//var lettersGuessed =" "; // holds the current set of letters the player has guessed up to 10
function resetGame () {

  computersPick=letters[randomLetter]; 
  guessRemaining = 10; 
  guesses = [];

}
document.onkeyup = function(event) {
      
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
if(guessRemaining > 0) {
  if(userGuess === computersPick){
    wins++;
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    resetGame()
  } else if (userGuess !== computersPick){
    guessRemaining--;
    document.getElementById("GL").innerHTML = "Guesses Left: " + guessRemaining;
    guesses.push(userGuess)
    document.getElementById("YG").innerHTML = "Your Guesses so Far: " + guesses;
  }
} else {
  losses++;
  document.getElementById("Losses").innerHTML = "Losses: " + losses;
  resetGame()
}

  
};
*/
document.addEventListener("click", function() {
  document.getElementById("vader").innerHTML = "Hello World";
});