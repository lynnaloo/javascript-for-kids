var word = prompt("Player 1, Enter your secret word.");

var secret = [];
var strikes = 0;

for (i = 0; i < word.length; i++) {
  secret.push("_");
}

// Create a loop that keeps looping until there have been
// 3 bad letter guesses, or there are no placeholders
// left in the secret array
while (strikes < 3 && secret.indexOf("_") >= 0) {

  var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter.");

  if (word.indexOf(letter) < 0) {

    strikes++;
    alert("Bad guess!");

  } else {

    for (i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        secret[i] = letter;
      }
    }

  }
}
