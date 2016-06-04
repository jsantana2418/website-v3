// // JavaScript NUMBERS
// var score;
// var score = 0;
// score = score + 100;
// shorthand version
// score  += 10;
// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var monthsPerYear = 12;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// // document.write("There are " + secondsPerDay + " seconds in a day");
// var yearsAlive = 31;
// var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
// document.write("I've been alive for more than " + secondsAlive + " seconds.");
//
//
// var wholesalePrice = 5.45;
// var retailPrice = 9.99;
// var quantity = 47;
// var salesTotal = retailPrice * quantity;
// var profit = salesTotal - wholesalePrice * quantity;
// var profitPerUnit = profit - quantity;
// document.write(profitPerUnit);
//
//
// var HTMLBadges = prompt("How many HTML badges do you have?");
// var CSSBadges = prompt("How many CSS badges do you have?");
// // problem below it will concatenate the inputs as string
// // rather than treat them as numbers.
// // var totalBadges = HTMLBadges + CSSBadges;
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// alert("Wow! You have " + totalBadges + " badges!");
//
//
// var questions = 3;
// var questionsLeft = "[" + questions + " questions left]";
// var adjective = prompt("Please type an adjective" + questionsLeft);
// questions -= 1;
// var questionsLeft = "[" + questions + " questions left]";
// var verb = prompt("Please type a verb" + questionsLeft);
// questions -= 1;
// var questionsLeft = "[" + questions + " questions left]";
// var noun = prompt("Please type a noun" + questionsLeft);
// alert("All done. Ready for the message?");
// var sentence = "<h2>There once was a " + adjective;
// sentence += " programmer who wanted to use JavaScript to " + verb;
// sentence += " the " + noun + ".</h2>";
// document.write(sentence);
//
//
// var temperature = 37.5;
// alert(Math.round(temperature));
// alert(Math.floor(temperature));
//
// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert("You rolled a " + dieRoll);
//
// Math.floor( Math.random() * 6) + 1



// // random challenge - my version
// var Number1 = prompt("Pick a number between 1 to 10");
// var Number2 = prompt("Pick a number between 1 to 10");
// var topNumber = parseInt(Number1);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// alert("Here's a random number from your first selection " + randomNumber)
// var bottomNumber = parseInt(Number2);
// var randomNumber = Math.floor(Math.random() * bottomNumber) + 1;
//
// // instructor version
// var input1 = prompt("Please type a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between " + bottomNumber  + " and " + topNumber + ".</p>";
// document.write(message);

// random challenge - my version(2)
function randomGameChallenge() {
    var firstNumber = prompt('Pick a number between 1 and 50.');
    var numOne = parseInt(firstNumber);
    var secondNumber = prompt('Pick a number between 1 and 50 again.');
    var numTwo = parseInt(secondNumber);

    var randomNumber = Math.floor(Math.random() * (numOne - numTwo) + numTwo);

    document.getElementById('jsRandomGame').innerHTML =
    'The random number generated is ' + randomNumber + '.';
}
