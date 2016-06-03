
// CONDITIONAL STATEMENTS WITH 'IF' and 'ELSE'
// var answer = prompt("What programming language is the name of a gem");
// if (answer.toUpperCase() === 'RUBY') {
//   alert("<p>That's right!</p>");
// }
// else {
//   alert("<p>Sorry, that's wrong</p>");
// }

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt(" I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
//   document.write("<p>You guessed the number!</p>");
// }
// else {
//   document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
// }

// BOOLEAN VERSION
// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt(" I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
//   correctGuess = true;
// }
// if (correctGuess) {
//   document.write("<p>You guessed the number!</p>");
// }
// else {
//   document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
// }



// BOOLEAN ELSE IF
/* The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attempts to guess the number.
*/

// assume the player didn't guess correctly
// var correctGuess = false;
//
// // generate random number from 1 to 6
// var randomNumber = Math.floor(Math.random() * 6) + 1;
//
// var guess = prompt(" I am thinking of a number between 1 and 6. What is it?");
//
// /* test to see if player is
// 1. correct
// 2. guessed too high
// 3. guess too low
// */
// if (parseInt(guess) === randomNumber) {
//   correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
//   var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
//   if (parseInt(guessMore) === randomNumber) {
//     correctGuess = true;
//   }
// } else if (parseInt(guess) > randomNumber) {
//   var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
//   if (parseInt(guessLess) === randomNumber) {
//     correctGuess = true;
//   }
// }
//
// // test if player is correct and output response
// if (correctGuess) {
//   document.write("<p>You guessed the number!</p>");
// }
// else {
//   document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
// }



// CONDITIONAL challenge
var answer1 = 'white'; // the moon color is white
var answer2 = 'round'; // saturn shape is round
var answer3 = 'earth'; // planet we live on is earth
var answer4 = 'jupiter'; // biggest planet in our solar system is jupiter
var answer5 = 'yellow'; // the color of our sun is yellow
var score = 0; // user score

// code will run in browser once the user clicks on the button in the home page
function javascriptGame() {
    // question 1
    var guess1 = prompt("What color is the moon?");
    if (guess1 === answer1) {
        score += 1; // rather than score = score + 1
        alert("That's right! Your current score = " + score);
    } else {
        alert("Sorry buddy! Your current score = " + score);
    }

    // question 2
    var guess2 = prompt("what shape is Saturn, round or square?");
    if (guess2 === answer2) {
        score += 1; // rather than score = score + 1
        alert("That's right! Your current score = " + score);
    } else {
        alert("Sorry buddy! Your current score = " + score);
    }

    // question 3
    var guess3 = prompt("what planet do we live on earth or mars?");
    if (guess3 === answer3) {
        score += 1; // rather than score = score + 1
        alert("That's right! Your current score = " + score);
    } else {
        alert("Sorry buddy! Your current score = " + score);
    }

    // question 4
    var guess4 = prompt("What is the biggest planet in our solar system?");
    if (guess4 === answer4) {
        score += 1; // rather than score = score + 1
        alert("That's right! Your current score = " + score);
    } else {
        alert("Sorry buddy! Your current score = " + score);
    }

    // question 5
    var guess5 = prompt("what color is our sun, yellow or blue?");
    if (guess5 === answer5) {
        score += 1; // rather than score = score + 1
        alert("That's right! Your current score = " + score);
    } else {
        alert("Sorry buddy! Your current score = " + score);
    }

    // Final score is...
    document.getElementById('javascript').innerHTML = "Your score is " + score + " Well done!";

    // Medal Ceremony
    if (score === 5) {
        document.getElementById('javascript').innerHTML = " You received a GOLD MEDAL!";
    } else if (score === 3 || score === 4) {
        document.getElementById('javascript').innerHTML = " You received a SILVER MEDAL!";
    } else if (score === 1 || score === 2) {
        document.getElementById('javascript').innerHTML = " You received a BRONZE MEDAL!";
    } else {
        document.getElementById('javascript').innerHTML = " You received a pat on the back for playing!";
    }
};
