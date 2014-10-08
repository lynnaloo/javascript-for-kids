var word = prompt("Player 1, Enter your secret word.");

var secret = [];
var strikes = 0;

for (i = 0; i < word.length; i++) {
  secret.push("_");
}

var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter.");

if (word.indexOf(letter) < 0) {

  strikes++;
  alert("Bad guess!");

} else {

  for (i = 0; i < word.length; i++) {

    // Each time the guess letter is found, we
    // add it as a good guess in the same spot
    if (word[i] === letter) {
      secret[i] = letter;
    }

  }

}
