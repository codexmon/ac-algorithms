$(document).ready(function(){
    
    function makeMadLib() {
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        var sentence = person + " loves her " + adjective + " glasses, especially when tossed to the ground and crushed with shiny black tap dance " + noun + ".";
        $("#story").append("<p>" + sentence + "</p>");
        var object = {};
        object.noun = noun;
        object.adjective = adjective;
        object.person = person;
        return object;
    }

    $("#lib-button").on("click", function(){
        var userObject = makeMadLib();
        console.log(userObject);
    });

});