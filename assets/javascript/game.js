var numWin = 0;
var numLoss = 0;
var numGuess = 9;

function numberWin() {
    numWin += numWin;
}

function numberLoss() {
    numLoss += numLoss;
}

function guessGame(){
    //computers random guesses
    var compGuess;
    // get user to enter 9 guesses
    var userGuess;

    for(var i = 0; i < 10; i++) {
        if(userGuess == compGuess) {
            numWin++;
        }
        else {
            numLoss++; 
        }   
        
    }
}

console.log("End of Game");