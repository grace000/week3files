
<script type="text/javascript">

    window.onload = function () {

  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var guess ;             // Guess
  var guesses = [ ];      // Stored geusses
  var guessesLeft ;       // Guesses left
  var wins ;              // Count correct guesses
  var losses = [];        // Stored losses

    //Pick a random letter

    var letter = letters[Math.floor(Math.random() * letters.length)];

    // Set up the answer array

    var answerArray = [];

    for (var i = 0; i < letter.length; i++) {

      answerArray[i] = "_";

    }

    var remainingLetters = letter.length;

    // The game loop

    while (remainingLetters > 0) {

    // Show the player their progress

    alert(answerArray.join(" "));

    // Get a guess from the player

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

     if (guess.length !== 1) {

        alert("Please enter a single letter.");

      } else {

        // Update the game state with the guess

        for (var j = 0; j < letter.length; j++) {

          if (word[j] === guess) {

            answerArray[j] = guess;

            remainingLetters--;

          }

        }

      }

    // The end of the game loop

    }

    // Show the answer and congratulate the player

    alert(answerArray.join(" "));

    alert("Good job! The letter was " + letter);

</script>
