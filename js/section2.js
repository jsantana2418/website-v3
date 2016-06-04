// // variable
//
// var x = 5;
// var y = 6;
// var z = x + y;
//
// alert('Welcome to my site!');
// document.write("<h1>Welcome to my site</h1>");
// console.log("Program complete");
// var visitorName = prompt("What is your name?");
// alert(visitorName);
//
// // Concatenation
// //
// // The process of combining strings is called "concatenation". In JavaScript, you combine strings with a + operator like this:
// // 'one string ' + ' another string'
// // If you have a variable that contains a string you can combine it with a literal string value to come up with a new string:
//
// var name = "Dave";
// var message = "Hello " + name;
// var visitor = prompt("What is your name");
// var message = 'Hello ' + visitor + ". Welcome to treehouse.";
// message += "We are so glad that you came by to visit, ";
// message += visitor;
// message += ". Please come again, when you want to learn some more.";
// document.getElementById('demo')(message);
//
//
// var passphrase = 'Open Sesame';
// console.log(passphrase.length);
// console.log(passphrase.toLowerCase());
// console.log(passphrase);
// console.log(passphrase.toUpperCase());
//
//
// var stringToShout = prompt("What should I shout?");
// var shout = stringToShout.toUpperCase();
// shout += "!!!";
// alert(shout);
//
// var id = "23188xtr";
// var lastName = "Smith";
// var userName = id.toUpperCase() + "#" + lastName.toUpperCase();
// document.write(userName);
//
//
// // JavaScript variable code challenge
function variableStoryGame() {
    var noun = prompt("Please type in a noun?");
    var profession = prompt("Please type in a profession?");
    var verb = prompt("Please type in a verb?");
    var adjective = prompt("Please type in a adjective?");
    alert("All done!");
    document.getElementById('jsVarGame').innerHTML =
        "There was a person named " + noun +
        " who was inspired by their life experience to become a " + profession +
        " and " + verb + " after their goals because they felt " + adjective + ".";
}
