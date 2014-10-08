// Prompt Player 1 to enter a word to guess and store
// as a variable called 'word'.
var word = prompt("Player 1, Enter your secret word.");

// Make an array called 'secret'
var secret = [];

// Fill the 'secret' array with a placeholder for
// each letter in the secret word
for (i = 0; i < word.length; i++) {
  secret.push("_");
}

// Show Player 2 how many letter are in the secret word by
// displaying the placeholders we put in the secret array.
// Then prompt Player2 to guess a letter in the secret word and
// store it has a variable called 'letter'
var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter.");
