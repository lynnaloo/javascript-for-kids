var word = prompt("Player 1, Enter your secret word.");

var secret = [];

for (i = 0; i < word.length; i++) {
  secret.push("_");
}

// Add a variable to store the number
// of bad guesses
var strikes = 0;

var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter.");

// Check to see if the letter that Player2 guessed is in the secret word.
// If the result of 'indexOf' is a number less than 0, like '-1', then that
// means that the letter was not found
if (word.indexOf(letter) < 0) {

  // If the letter is *not* in the word, then we need
  // to increase the number of strikes
  strikes++;

  // Then tell Player2 that they guessed a wrong letter
  alert("Bad guess!");

}
