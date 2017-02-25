

  $(document).ready(function) {

  // This array holds the words that the player will choose from.
  var words = [
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
  
  var guess ;                       // Guess
  var previousGuesses = [ ];        // Stored geusses
  var guessesLeft ;                 // Guesses left
  var wins ;                        // Count correct guesses
  var wrongAnswerCount = [];        // Stored losses

   // This is how a word will be randomly chosen from the list.
  var randomWord = words[Math.floor(Math.random() * words.length)];

    // Empty array to store guesses
    var answerArray = [];
  
  //Game Screen
  function gameScreen(){
    $('#game-container').empty(); 
    $('#gameContent').append('<div id="wordHolder"></div>');
    $('#gameContent').append('<div id="guesses">Previous guesses:</div>');
    $('#gameContent').append('<div id="feedback"></div>');

    getWord(); 
    var numberOfTiles=randomWord.length; 
    wrongAnswerCount=0; 
    previousGuesses=[];

    for(i=0;i<numberOfTiles;i++){ 
    $('#wordHolder').append('<div class="tile" id=t'+i+'></div>');
}

  $(document).on("keyup",handleKeyUp);

  //filling the answer array with under scores.
  lineSet = function () {
    
    randomWord ();

    for (var i = 0; i < randomWord.lenth; i++)
    {
        answerArray[i] = "_";
    }

    var remainingLetters = letter.length;

    
       

    // The end of the game loop

    };

    

