//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//input: a string
//output: a number, the length of the longest word.
//purpose: to be able to count the number of letters in a word in a multi-word string, and to find the longest word

//We need to look at the length of each word, we need to compare the length of each word with the others in the string. If a word is longer than the one that comes before it, we will replace the value of its length.
//Tools: a variable to store the length of the longest string
//.split() to change our string into an array
// For loop: run through the words
  //Conditional statatement: check to see if the next word is longer than the word that came before it.
    //If true, I want to replace the value of the variable with the length of the longer word.



//create a variable to store the longest string
//variable to store our array
//.split to turn our string into an array
//for loop to loop through an array of words
  //conditional statement to test to see the new word we are testing is longer than the one stored in our variable. if it is, it replaces it with the new word
//return the variable string the longest word




function findLongestWord(str) { // input is a stirng
  //your code here
  var wordArray = str.split(" "); // space is for the delimiter; array of words created from the split
  var longestWord = wordArray[0].length; // it can also be set to 0. This variable must be set out; 1 box and can be compared. Not create 100 boxes with no comparison. variable is the first element's length
  for (var i = 0; i < wordArray.length; i++) {
    // variables are not created and stored in conditional loops. every time the loop runs, the variable created and stored in memory and is assigned the value; create, assign, repeat -- nowhere to compare to the variable outside the loop and to track the changes. not reassigned outside the loop. check the sounding board outside. create variable over and over again.
    if (wordArray[i].length > longestWord) { // every word in the array can only be greater than
      longestWord = wordArray[i].length; // update variable's value to be that element's length
    }; 
  }
  return longestWord;
}

var result = findLongestWord("What if we try a super-long word such as otorhinolaryngology");
console.log(result);