// Math.random() gives a random number between 0 and 1. When you multiply it by 100, it will be from 0 to 100.
// When you round it, it will be from 0 to 99. So, when you add 1 to it, it will be from 1 to 100.

var one_to_hundred_random_number = Math.round(Math.random() * 100) + 1;
var guess = 0;
while (isNaN(guess) || guess < 1 || guess > 100) {
    
    guess = prompt("Guess a number between 1 and 100"); // prompt returns a string. In Javascript, 5 == "5" will be true. In other languages, it will be false.

    if(isNaN(guess)) {
        window.alert("Please enter a number.")
    } else if(guess < 1) {
        window.alert("Too Low. Enter Again.")
    } else if(guess > 100) {
        window.alert("Too High. Enter Again.")
    } else {
        window.alert("Perfect");
        displayWithBr(guess);
    }

  }