
  // This array holds the words that the player will choose from.
  var wordBank = [
    'chicago', 
    'rush', 
    'lawrence', 
    'halsted', 
    'ashland',
    'jackson',
    'paulina',
    'addison',
    'roscoe',
    'belmont',
    'wolcott',
    'damen',
    'western',
    'division',
    'pulaski',
    'kedzie',
    'normal',
    'racine',
    'harrison',
    'lincoln',

    ];


  //Now define global variables 
  var wins = 0;                     // sets the initial value of the wins, to be manipulated later as the user wins
  var losses = 0;
  var lives = 7;                    // 7 lives to start with
  var guessesRemaining = 7;         // Guesses left
  var wrongGuess = [];              
  var selectWord = null;            //run a selctor to fill that in with current word
  var answerArray = [];             // Empty array to store guesses


   // This is how a word will be randomly chosen from the word bank.
  var updateSelectWord = function () {
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (var i = 0; i < selectWord.length; i++) {
        //adding blank tiles to the screen. Each tile should hold a letter.
         answerArray[i] + "_";
          console.log("test");
  };
};

  //This function will take the script and place into HTML an update of guesses remaining after each guess.
  var updateGuessesRemaining = function() {
    document.querySelector('#guessesRemaining').innerHTML = "Lives left: " + guessesRemaining;
  };

  
  //Setting up how the guesses will join on HTML
  var updatewrongGuess = function() {
    document.querySelector('#wrongGuess').innerHTML = "Your Guesses so far: " + wrongGuess.join(', ');
  };



  //Game Screen


   
//resets page once we invoke it - we won't invoke it until we either win or lose the game
var reset = function() {
    lives = 7;
    guessesRemaining = 7;
    wrongGuess = [];
    updateSelectWord();
    updateGuessesRemaining();
    updatewrongGuess();
};

updateSelectWord();
updateGuessesRemaining();


//below function will insert letters into our game upon a keypress
document.onkeyup = function(event) {
    
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    var letterCorrect = false;
    var alreadyGuessed = false;
    
    //if letter guessed is in the word being guessed
    for (var i = 0; i < selectWord.length; i++) {
        if (selectWord[i] === letter) {
            answerArray[i] = letter;
            document.getElementById("selectWord").innerHTML = answerArray.join(" ");
            letterCorrect = true;
        }
    }
    
    //if letter guessed is not in the word being guessed
    if (!letterCorrect) {
        for (var j = 0; j < wrongGuess.length; j++) {
            if (letter === wrongGuess[j]) {
                alreadyGuessed = true;
            }
        }
        if (!alreadyGuessed) {
            lives--;
            wrongGuess.push(letter);
            document.getElementById("wrongGuess").innerHTML = wrongGuess.join(", ");
            var guessesRemaining = "<h3>Guesses Remaining: " + lives + "</h3>";
            document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
        }
    }
    // if lives remining goes down to 0 (too many wrong guesses), the game resets and increases our loss count
    if (lives === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        reset();
    }
    // if the player guesses all letters in the word being guessed, the game resets and increases our win count
    if (!answerArray.includes("_")) {
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        reset();
    }
}
       

 

    

