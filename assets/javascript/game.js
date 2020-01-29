//Creating variables and setting them to default 
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to the nearest whole number by the Math.floor method. 
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
      var playerGuess = event.key;

      // HANDELING CORRECT GUESSES
       if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];
        }

      //HANDELING INCORRECT GUESSES
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
        }

      //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //HANDELING INCORRECT GUESSES - OUTPUT
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}