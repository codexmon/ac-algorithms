/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
split() --> splits string into an array of letters
Inside the () is an argument, a delimiter, where we want the split to occur.
"" - every letter
" " - every word
___.split() --> the blank can only be a string data type

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
sort() --> sorts elements in an array alphabetically

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
join(" ") --> takes an array and combines elements to make a string

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

// Input: a string
// Output: a string, but with letters in alphabetical order
// Purpose: to alphabetize the list of letters in a given string
// string is our input parameter

//My preliminary pseudocode.
// Create a variable named result that is the output of a function
// If input is an empty string, output is also an empty string.
// If input is one word, the word is sorted so that letters appear in alphabetical order.
// If input is two words, then a blank space comes before the sorted letters in both words.
// If input is three or more words, then no blank spaces appear before the sorted letters of all words.

function alphabetSoup(str) {
	//turn the string into an array of characters, using split, store the resulting array in a variable, split method takes in delimiter -- ""
	//Sort the array (Sort method does not take in an argument)
	//Join the elements in the array back into a string, the argument for the .join() method will be ""
	//get rid of the spaces at the beginning or the end of a string by using .trim()

	//Version 1 (does not account for capital letters, which appears sooner in the unicode system):
	var characters = str.split("").sort().join("").trim();
	return characters;

	// Version 2:
	//var characters = str.split("");
	//var array = characters.sort();
	//var newArray = array.join("");
	//var newString = newArray.trim();
	//return newString;

	// Version 3:
	// str = str.split("").sort().join("").trim();
	// return str;

	//Version 4 (does account for capital letters):
	// var characters = str.toLowerCase().str.split("").sort().join("").trim();
	// return characters;
}
