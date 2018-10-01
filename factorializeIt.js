//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function factorializeIt(num) {
  //input: a number
  //output: a number, a bigger number, the factorial of the input number
  //create a new variable, that will store the output
  //create a loop, the loop will run from 1 until the value of the input number
  //multiply the value of our new variable by the current value of i (aka our counter)
  //return statement at the end of the function

  //must name a variable to store the value for return
  var newNum = 1;
  //needs a for loop with variable i
  for (var i = 1; i <= num; i++){
    newNum *= i;
  }
  //output is to return a value/statement at the end of the function
  return newNum;
}

//must save the return to a variable
var result = factorializeIt(5);
//then console log the result to see the value of the variable
console.log(result);