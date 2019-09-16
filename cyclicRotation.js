///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\

//Input: 2 inputs, an array and a number

//Output: an array (with the numbers rearranged)

// Tools: loop - the loop will run for the number of rotations that we want the array to go through
// shift, unshift, push, and pop methods to work with arrays, we want to use them to get the last element in the array and move it to the beginning of each time the loops run
//Output the array once the loop has finished. 

function cyclicRotation(arr, rotation){
    // Input: array, number of rotations
    // Output: 1 new array, unshift numbers by k times of rotations
    // Purpose: element's position in the manipulated array
    // Need for loop for the number of rotations
    for (var i = 0; i < rotation; i++) {
        //We need a variable to store the number that is popped.
        var dropLastNumber = arr.pop();
        //We need to add this value to the front of the array.
        arr.unshift(dropLastNumber);
    }
    console.log(arr) // console.log outside of for loop to only run after the result of the for loop
    return arr; // a return in the for loop will only run once.
    // Pop off last element of the array - to store in the variable
    // Unshift beginning element of the array - add that variable
    // these numbers need to equal each other; store the number in a variable
}

var result = cyclicRotation([3, 8, 9, 7, 6], 3);// if console.log is not built into a function, then I need to create a variable outside of the function to store the array so that it can be used elsewhere.
console.log(result);
