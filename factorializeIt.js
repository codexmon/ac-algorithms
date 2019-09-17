//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function factorializeIt(num) {
  //input: a number
  //output: a number, a bigger number, the factorial of the input number
  //Variable: create a new variable, that will store the output (the product)
  //multiplication operator (*)
  //Is there a JavaScript method that calculates a factorial? 
  //Loop: create a loop, the loop will run from 1 until the value of the input number that is the parameter. Instead of adding each time in the loop, we can multiply
  //aka multiply the value of our new variable by the current value of i (aka our counter)
  //return statement at the end of the function

  //must name a variable to store the value for return outside of the for loop. otherwise, every time the for loop runs, the variable will be recreated again and the value would be reset to 1. we must have the variable in the function so that no other function can access it and mess with its value. so we lock the variable in our function.
  var newNum = 1;
  //needs a for loop with variable i
  for (var i = 1; i <= num; i++){
    //we reassign the newNum to be the value of newNum * i.
    newNum *= i;
  }
  console.log(output)
  //output is to return a value/statement at the end of the function
  return newNum;
}

factorializeIt(5)

//Googled Version
function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
  else {
      return (num * factorialize(num - 1));
  }
}

//must save the return to a variable
var result = factorialize(5);
//then console log the result to see the value of the variable
console.log(result);


