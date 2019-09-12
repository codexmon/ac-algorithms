// Problem: Need to get values from the user in order to create a Mad Lib
// Step 1: User enters the information and clicks the button

$(document).ready(function(){
    
    //Function declarations - list them first before your event listeners.
    function makeMadLib() {
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        var sentence = person + " loves her " + adjective + " glasses, especially when tossed to the ground and crushed with shiny black tap dance " + noun + ".";
        $("#story").append("<p>" + sentence + "</p>");

        //Variation
        //$("#story").append("<p>" + person + " really likes " + adjective + noun + "<p/>")

        //Variation on user object creation
        //We are creating a variable called userObject and setting it as an object.
        // var userObject = {};
        // userObject.noun = noun;
        // userObject.adjective = adjective;
        // userObject.person = person;

        //Object creation
        var object = {};
        object.noun = noun;
        object.adjective = adjective;
        object.person = person;
        return object;
    }

    // Step 2: Create an event listener to be listening on the button, so that when the user clicks it, we can execute a callback function - jQuery, use .on() for click event

    //Event Listener to execute makeMadLib function
    $("#lib-button").on("click", function(){
        var userObject = makeMadLib();
        console.log(userObject);
    }); //closes .on()

    //Step 3: Create a function that has three variables, one for each of the words the user types in. Each of these variables will have the value of what the user typed in. - use jQuery .val() method

    //Step 4: Display the data in a sentence to the user - jQuery .append() to the div in the HTML. But the concatenated sentence with the variables inside the append method parentheses.

    //Step 5: (BONUS) Create a variable and initialize it/set it equal to empty curly brackets. Add the 3 key value pairs with dot notation.

    //Bonus: Make an object with the list elements as keys and inputs as values.

}); // closes the .ready()




