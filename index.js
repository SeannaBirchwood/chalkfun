var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");

//var message1 = "My name is" + chalk.purple("Seanna");
var message2 = "My name is " + chalk.red.bgRed.bold("Seanna");
console.log(message);
//console.log(message1); purple isn't a function
console.log(message2);