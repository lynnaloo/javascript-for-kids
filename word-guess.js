
// Guess the word one letter at a time.
// Each player is only allowed to guess
// wrong three times.

// Create a variable to store the number of bad guesses
var bad_guesses = 0;
// Create another array to store good guesses
var good_guesses = [];

// Prompt Player 1 to enter a word to guess and store
// as a variable.
// TODO: put this in a loop until a valid response is received.
var secret_word = prompt("Player 1: Enter your secret word.");

// Fill this array with placeholders for guessing
for (i = 0; i < secret_word.length; i++) {
  good_guesses.push("_");
}

// Start a loop that continues as long as the person has
// not guessed wrong three times, or all of the letters have
// been guessed.
while (bad_guesses !== 3 && good_guesses.indexOf("_") !== -1) {

  // Prompt Player 2 to guess a letter and store as
  // a variable.
  // TODO: put this in a loop until a valid response is received.
  var guess = prompt(good_guesses.join(" ") + "\n\n" + "Player 2: Guess a letter.");

  // If the letter does not exist in the word,
  // add it to the bad guesses.
  if (secret_word.indexOf(guess) === -1) {
    bad_guesses++;
    alert("Bad guess!");

  // If the letter exists in the word, we need to
  // add it to the good guesses array
  } else {
    for (i = 0; i < secret_word.length; i++) {
      // Each time the guess letter is found, we
      // add it as a good guess in the same spot
        if (secret_word[i] === guess) {
          good_guesses[i] = guess;
        }
    }
  }
}

// Once the player has exited the loop, congratulate
// them on a win, or tell them they have lost and show
// the secret word.
if (bad_guesses === 3) {
  alert("Sorry, please play again!");
} else {
  alert("Congratulations on your win!");
}
alert("The secret word was " + secret_word);
