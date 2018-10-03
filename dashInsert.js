/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = dashInsert("13");
console.log(result) // "1-3"

**/
//input: a string that contains at least one digit, a string of numbers
//output: a string of numbers with dashes
//split the string into an array of numbers
//store the array in a variable
//create a for loop that loops through the numbers (aka, the elements in the array)
	//condition statement that checks if current number we are looking at and the number that comes next in the array are both odd
		//if they are, we want to add the number itself and add a dash to the variable storing our output
//return the string, aka the variable storing the output from our loop

function dashInsert(str) {
	// need to split the numbers to break it into odd and even numbers
	var arrayNumbers = str.split("");
	var newString = "";
	// need a conditional statement to differentiate bettween odd and even numbers

	//Code block in progress
	// for (var i = 0; i < arrayNumbers.length; i++){
	// 	if (arrayNumbers[i] % 2 === 1 && arrayNumbers[i+1] % 2 === 1){
	// 		newString = arrayNumbers.splice(i, 0, "-")
	// 	}
	// .join(); needs to be outside the conditional statement

	//Alternate code
	for (var i = 0; i < arrayNumbers.length; i++){
		if (arrayNumbers[i] % 2 === 1 && arrayNumbers[i+1] % 2 === 1){
			newString = newString + arrayNumbers[i] + "-";
		} else {
			newString = newString + arrayNumbers[i];
		}
	}
	//need to return the item to make it accessible outside the conditional loop
	return newString;
}

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = dashInsert("13");
console.log(result) // "1-3"
