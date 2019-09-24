//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//input: a string
//output: a nested array
//purpose: match each element with its base pair, resulting in an array of base pairs

//Create a variable that stores the transformation of the input string into an array, .split("")
//Create a variable that stores an empty array, this will eventually be our output
//Create a for loop to run through the array of letters
  //Create a conditional statement that checks to see if the current letter we are on in the loop is equal to one of the 4 letters.
    //If true, push an array with the two strings into our variable storing the array
  //Return the parent array, variable.

function pairElement(str) {
  //variable to store split string into an array
  var strArray = str.split('');
  //create a variable that will hold all the base pairs, parent array
  var parentArray = [];
  //loop through the elements of the array
  for (var i = 0; i < strArray.length; i++){
    // conditional statement that tests whether that element is strictly equal to any of the four possible letters
    //adds appropriate base pair and creates new array
    //add new array to the parent array, pushing it
    if (strArray[i].toUpperCase() === "G"){
      var basePair = ["G", "C"];
      parentArray.push(basePair);
    } else if (strArray[i].toUpperCase() === "C"){
      var basePair = ["C", "G"];
      parentArray.push(basePair);
    } else if (strArray[i].toUpperCase() === "A"){
      var basePair = ["A", "T"];
      parentArray.push(basePair);
    } else if (strArray[i].toUpperCase() === "T"){
      var basePair = ["T", "A"];
      parentArray.push(basePair);
    }

    //Alternate Code
    if (strArray[i].toUpperCase() === "G"){
      parentArray.push(["G", "C"]);
    } else if (strArray[i].toUpperCase() === "C"){
      parentArray.push(["C", "G"]);
    } else if (strArray[i].toUpperCase() === "A"){
      parentArray.push(["A", "T"]);
    } else if (strArray[i].toUpperCase() === "T"){
      parentArray.push(["T", "A"]);
    }

  } 
  //return the parent array outside of conditional statement or else it will only run once instead of looping through
  return parentArray;
}

// Alternate Function using the Switch Keyword from Free Code Camp
//Switch is useful if there are more than 15 (lots and lots of) different options and you do not want to write the condition again and again. 
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i].toUpperCase());
  }

  return paired;
}

// test here
pairElement("GCG");


var results1 = pairElement("GCG");
var results2 = pairElement("GACTA");
console.log(results1);

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]