//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// Pseudo-code is below; system requirements and frameworks and plug-ins are in a spreadsheet that is noted as documentation

//Input: radius, a number
//Output: value of the calculation (number) OR the sentence (a string)

//Add radius as the parameter for our function

$(document).ready(function (){

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
});
