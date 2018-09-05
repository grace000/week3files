$(function(){

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
  let guessesRemaining = 7;       
  let wrongGuess = [];              
  let answerArray = [];            
  let currentWord; 
  let blankSpots;
  let winCount = 0;
  let lossCount = 0;

  // This is how a word will be randomly chosen from the word bank.
  function getRandomWord(){
    let randomNum = Math.floor(Math.random() * wordBank.length);
    currentWord = wordBank[randomNum];
  }

  function placeRandomWord(){
    getRandomWord();

    //make a dash that represents each letter of the word to guess
    let blankSpots = currentWord.replace(/[a-zA-Z]/g , '-');
    
    //place blank spots on the page
    $('#wordToGuess').text(blankSpots);

    //answerArray has already been initiated. Fill each array with the dash that represents the 
    //letter that has to be guessed. Doing this since we can splice array, but not splice string based 
    //on position.
    for (spot in blankSpots) {
      answerArray.push(blankSpots[spot]);
    }
  }

  function userTakeGuess(){

    //when a key is pressed, save it as a lower case string and assign to userInput
    document.onkeyup = function(event){
      let userInput = String.fromCharCode(event.keyCode).toLowerCase();

     //If the current word includes the lettered keyed, save the index of the letter guessed that represents 
     //the index of the letter in the current word.
      if (currentWord.includes(userInput)) {
        var indices = [];
        for(var i=0; i<currentWord.length;i++) {
          if (currentWord[i] === userInput) {
            indices.push(i);
          }
        }
        //for each index, splice the blankSpotsArray. Replace the dash with the userInput at the 
        //saved index that corresponds to letter's correct position
        indices.forEach((item, index) => answerArray.splice(item, 1, userInput));
    
        //replace the display with the modified array
        $('#wordToGuess').text(answerArray.join(" "));
        checkWin();
      } 
      else {
        if (wrongGuess.includes(userInput)){
          alert("You have already selected the letter: " + userInput + " .")
        } 
        else {
          wrongGuess.push(userInput);

          //otherwise append the userInput to the wrong guess display
          $('#wrongGuess').append(wrongGuess[wrongGuess.length - 1]);
          //decrement remaining guesses
          guessesRemaining --; 
          //display the guesses remaining on the page
          $('#guessesRemaining').text(guessesRemaining);
          checkWin();
        }
      }
    }
  }

  function checkWin(){
    if (answerArray.join("") === currentWord){
      alert(currentWord.toUpperCase() + " You got it!")
      updateWinCount();
      resetGame();
    }
    if (guessesRemaining === 0) {
      alert("You're out of guesses. Game Over!")
      updateLossCount();
      resetGame();
    }
  }

  function startGame(){
    $('#guessesRemaining').text(guessesRemaining);
    placeRandomWord();
    console.log(currentWord);
    userTakeGuess();
  } 

  //resets page once we invoke it - we won't invoke it until we either win or lose the game
  const resetGame = function() {
      $('#wordToGuess').empty();
      $('#wrongGuess').empty();
      guessesRemaining = 7;
      answerArray = [];
      wrongGuess = [];
      startGame();
      console.log(currentWord);
  };

  function updateWinCount(){
    winCount++;
    $('#winCounter').text(winCount);
  }

  function updateLossCount(){
    lossCount++;
    $('#lossCounter').text(lossCount);
  }

  startGame();

});