/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

//inputs: two numbers, a + b, parameters (hopefully)
//output: true, false, 0, or -1. either a boolean, 0, or -1, depending on the calculations
// Step 1: We need to test if a is greater than b, conditional statement
//Step 2: Need to create a return statement if a is greater than be, returns true
//Step 3: Need to make a condition if a is less than b. Else if block that returns false.
//Step 4: Test if the two numbers are equal, else block that would return 0.
//Step 5: Create a condition that tests to see if a and b are both numbers. If they are proceed with steps 1-4. If not, reutrn -1. Conditional statement that wraps around our conditional statements in steps 1-4. And we will need a logical operator: && and typeof to check if the inputs are actually numbers. typeof determines the data type of the value.

// if a && b are numbers
	//a > b
	//a < b
	//a === b
//else return -1


//purpose: evaluate a and b to see if they are numbers AND how they compare to one another (ie, if one is bigger)

function isBigger(a, b) {
	//conditional statement to test if a > b
	var result = "";
	//test if a < b
	//if a === b
	// if a or b are not numbers
	if (typeof a === "number" && typeof b === "number"){
		if (a > b) {
			result = true;
		} else if (a < b) {
			result = false;
		} else {
			result = 0;
		}
	} else {
		result = -1;
	}
	return result;
}