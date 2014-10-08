var word = prompt("Player 1, Enter your secret word.");

var secret = [];
var strikes = 0;

for (i = 0; i < word.length; i++) {
  secret.push("_");
}

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

// Once the player has exited the loop, congratulate
// them on a win, or tell them they have lost and show
// the secret word.
if (strikes === 3) {
  alert("Sorry, please play again!");
} else {
  alert("Congratulations on your win!");
}
alert("The secret word was " + word);
