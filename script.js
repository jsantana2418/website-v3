// CONDITIONAL challenge
var answer1 = 'white'; // the moon color is white
var answer2 = 'round'; // saturn shape is round
var answer3 = 'earth'; // planet we live on is earth
var answer4 = 'jupiter'; // biggest planet in our solar system is jupiter
var answer5 = 'yellow'; // the color of our sun is yellow
var score = 0; // user score

window.onload = function() {
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
    document.write("Your score is " + score + " Well done!");

    // Medal Ceremony
    if (score === 5) {
        document.write(" You received a GOLD MEDAL!");
    } else if (score === 3 || score === 4) {
        document.write(" You received a SILVER MEDAL!");
    } else if (score === 1 || score === 2) {
        document.write(" You received a BRONZE MEDAL!");
    } else {
        document.write(" You received a pat on the back for playing!");
    }
};
