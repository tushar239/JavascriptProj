// You don't have to create html file. You can copy js code and paste it in browser -> inspect -> Console.

// Math.random() gives a random number between 0 and 1. When you multiply it by 100, it will be from 0 to 100.
// When you round it, it will be from 0 to 99. So, when you add 1 to it, it will be from 1 to 100.

/*
    Challenge for student: 
        once you explain if-else if-else, while/do-while loop, function, challenge the student for inputting his name and then
        printing his name 100 times using a loop, if both numbers are equal.
*/

var one_to_hundred_random_number = Math.round(Math.random() * 100) + 1; // This will return a number. So, type of variable is number.
/*
// while loop
var guess = "";
while (isNaN(guess) || guess < 1 || guess > 100) { // isNan() is isNotANumber
    
    guess = prompt("Guess a number between 1 and 100"); // prompt returns a string, so type of 'guess' is string. In Javascript, 5 == "5" will be true. In other languages, it will be false.

    if(isNaN(guess)) {
        alert("Please enter a number.");
    } else if(guess < 1) {
        alert("Too Low. Enter Again.");
    } else if(guess > 100) {
        alert("Too High. Enter Again.");
    } else {
        alert("Perfect");
        compareGuess(guess, one_to_hundred_random_number);
    }

  }
  */

// do-while loop
do {
    var guess = prompt("Guess a number between 1 and 100"); // prompt returns a string, so type of 'guess' is string. In Javascript, 5 == "5" will be true. In other languages, it will be false.

    if(isNaN(guess)) {
        alert("Please enter a number.");
    } else if(guess < 1) {
        alert("Too Low. Enter Again.");
    } else if(guess > 100) {
        alert("Too High. Enter Again.");
    } else {
        alert("Perfect");
        compareGuess(guess, one_to_hundred_random_number);
    }
} while(isNaN(guess) || guess < 1 || guess > 100);


function compareGuess(guess, one_to_hundred_random_number) {
    if(guess > one_to_hundred_random_number) {
        displayWithBr(guess + " is greater than "+one_to_hundred_random_number);
    } else if(guess < one_to_hundred_random_number) {
        displayWithBr(guess + " is less than "+one_to_hundred_random_number);
    } else {
        displayWithBr(guess +" is equal to "+one_to_hundred_random_number)
    }
}