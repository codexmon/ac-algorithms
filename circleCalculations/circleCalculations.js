//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// Pseudo-code is below; system requirements and frameworks and plug-ins are in a spreadsheet that is noted as documentation

//Input: radius, a number
//Output: value of the calculation (number) OR the sentence (a string)

//Add radius as the parameter for our function

// Given the radius from the user, we want to find the area and the perimeter of the circle
// Input: radius, a number
//Create a variable to store the calculated area
//Create a variable to store the calculated perimeter
//Calculate area with PI * radius ^ 2
//Calculate perimeter with 2 * PI * radius
//Return statement that is the string with the variables
// Outputs: area and perimeter, two numbers, bonus: output will be a concatenated string

$(document).ready(function (){

	//Version 1: does not accept input from user
	function circleCalculation(num) {
		//calculate the area of the circle, store the value in a variable
		var areaCircle = Math.round(Math.PI * Math.pow(num, 2));
		//calculate the perimeter of the circle, store the value in a variable
		var perimeterCircle = Math.round(2 * Math.PI * num);
		//create a sentence that concatenates the values in the sentence
		var sentence = "The area of the circle is " + areaCircle + " and the perimeter of the circle is " + perimeterCircle + "."
		//return the value of those calculations OR return a sentence; use return only to return a value
		return sentence;
	}
	
	var circleSentence = circleCalculation(10);
	console.log(circleSentence); // have console.log outside of a function so that it is not console logged every time the function is run

	//Version 2: accepts input from user
	function circleCalculation(){
		var radius = prompt("What is the radius of your circle?");
		var areaCircle = Math.round(Math.PI * radius * radius);
		var perimeterCircle = Math.round(2 * Math.PI * radius);
		var sentence = "The area of the circle is " + areaCircle + " and the perimeter of the circle is " + perimeterCircle + "."
		return sentence;
	}
	
	var circleSentence = circleCalculation();
	console.log(circleSentence);
});
