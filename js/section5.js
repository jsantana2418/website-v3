// FUNCTIONS
// function goToTheCoffeeShop() {
//   alert("Go get my coffee!!!");
// }
//
// goToTheCoffeeShop();
//
// function alertNumber() {
//   var randomNumber = Math.floor( Math.random() * 10 ) + 1;
//   alert(randomNumber);
// }
//
// alertNumber();

/* returning a randomNumber value from a function to be used elsewhere.
For example to alert it or print to console or put it in a variable. */
// function getRandomNumber() {
//   var randomNumber = Math.floor( Math.random() * 10 ) + 1;
// return randomNumber;
// }
// alert( getRandomNumber() );
// console.log( getRandomNumber() );
// var dieRoll = getRandomNumber();

// adding parameter values inside the function in this case 'upper' is the parameter.
// generate a random value between 1 and 1000, and then print it out to the console.
// function getRandomNumber( upper ) {
//   var randomNumber = Math.floor( Math.random() * upper ) + 1;
// return randomNumber;
// }
// console.log( getRandomNumber(1000) );

// function getArea ( width, height ) {
//   var area = width * height;
//   return area;
// }
// console.log( getArea(15, 15) );
//
// function getRandomNumber ( upper, lower ) {
//   if (isNaN(upper) || isNaN(lower) ) { // spit out error message if it's not a number
//     throw new Error("error message");
//   }
//     var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
//     return randomNumber;
// }
// write( getRandomNumber( "one-hundred", 50 ) );






//Random Number with Functions challenge
/* The function will run first when the user button click
section 5 Random Number Generator with FUNCTIONS.
The HTML has it where the paragraph will update once the
function argument has been passed in by the user input from
prompt and return the value and update it on HTML page.
*/
function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
