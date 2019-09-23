/*

Given a string, swap the case of each character and return it.
Assume the string has only letters.

Hint 1: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
//DIY Pseudo-Code
//input: a string
//output: a string with the case swapped

//need a variable to store the string as an array
//need to split the string into an array
//need a variable to store the new string
//need a conditional statement to look for spaces and swap out first letter
	//need an if statement for uppercase letters
	//need an else statement for lowercase letters
//need a return statement

//Group Pseudo-Code
//input: a string
//output: a string with every letter's case swapped

//Create a variable to contain the new string
//Split the string, setting the delimiter to be an empty string "", and create a variable to store the new array
//Create a for loop that starts at position zero, and loops through the elements of the array
	//Conditional statement to see ii the character you are on is uppercase
		//If true, make lowercase and add it to the variable with the output string
	//Else if, test if it is lowercase
		//If true, make it uppercase and add it to the variable with the output string
	//If false, add the character to the string.
//return the variable storing the output

function swapCase(str) {
	// Your code
	var arrayLetters = str.split("");
	var newString = "";

	//DIY code block - won't work for McDonald's
	for (var i = 0; i < arrayLetters.length; i++){
		if (i === 0 || arrayLetters[i - 1] === " ") {
			newString = newString + arrayLetters[i].toLowerCase();
		} else {
			newString = newString + arrayLetters[i].toUpperCase();
		}
	} 

	//Alternate Group code block (optional)
	for (var i = 0; i < arrayLetters.length; i++){
		if (arrayLetters[i] === arrayLetters[i].toUpperCase()) {
			newString = newString + arrayLetters[i].toLowerCase();
		} else if (arrayLetters[i] === arrayLetters[i].toLowerCase()) {
			newString = newString + arrayLetters[i].toUpperCase();
		} else {
			newString = newString + arrayLetters[i];
		}
	} 

	//Alternate Group code block (most ideal code block that will work for McDonald's)
	for (var i = 0; i < arrayLetters.length; i++){
		if (arrayLetters[i] === arrayLetters[i].toUpperCase()) {
			newString = newString + arrayLetters[i].toLowerCase();
		} else {
			newString = newString + arrayLetters[i].toUpperCase();
		}
	} 

	//Alternate Code block in ES6 with .map and ternary statements that often show up in React.js
	arrayLetters.map((letter) => { //i is only necessary if I need to assign i to a div and loop through
		arrayLetters === arrayLetters.toUpperCase() 
			? newString += arrayLetters.toLowerCase()
			: newString += arrayLetters.toUpperCase()
	})
	return newString;
}

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

var result = swapCase("Ole McDonalds");
console.log(result)