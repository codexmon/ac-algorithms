//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//input: a string
//output: a nested array
//purpose: match each element with its base pair, resulting in an array of base pairs

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
  } 
  //return the parent array outside of conditional statement or else it will only run once instead of looping through
  return parentArray;
}

var results = pairElement("GCG");
console.log(results);

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]