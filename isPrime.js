/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

//prime number is any number divisible by itself and 1. 

//input: any number between 1 and 2^16
//output: boolean
//needs variable to store the output?
//needs if else conditional statement
//needs a modulus
//needs return statement

//group pseudo code
//input: any number between 1 and 2^16
//output: boolean
//for loop that starts at 1 and goes up to the input number
	// conditional statement: if statement to check if the input number is 1 or 2
	// checks if the input number is divisible by i with 0 as its remainder, if true, we want it to return false
	//in else statement, return true

//group code
function isPrime(num) {
	
	if (num === 1){
		return false
	} 
	if (num === 2){
		return true;
	}
	for (var i = 2; i < num; i++){
		if (num % i === 0){
			return false;
		}
	}
	return true;
}

//Alternate code from online
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}