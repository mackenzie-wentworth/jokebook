// 1 - begin by console.log to test javascript functionality in code
console.log("script running");

// 8 part 2 - we want to get the element id named "#joke-list" by targeting it from our html with jquery by doing the following:
var $jokeList = $("#joke-list");

// 6 - now we wanna do something with the DATA to track the jokes data, so we can create an ARRAY data type to store our collection list of jokes.
// this will allow us to pull the jokes data from the array as needed AND update the list of data aka when we add new jokes to our collection
// start with an EMPTY array []
var jokes = [];

// 9 - create a function to save jokes to localStorage
// use 'JSON.stringify' to CONVERT ARRAY data in 'jokes' to a STRING instead (because localStorage only processes data as a string)
var saveJokes = function(){
    console.log("save jokes");
    localStorage.setItem("jokes", JSON.stringify(jokes));
}

// 10 - create a function to load our saved list when we open the page after refreshing
var loadJokes = function(){
    jokes = JSON.parse(localStorage.getItem("jokes"));
    console.log("load jokes", jokes);
    updateJokesList();
}

// 7 - create a function to pass in the data which is going to be added to the variable array of data called 'jokes' (listed above)
var addJoke = function(newJoke){
    jokes.unshift(newJoke);
    console.log("add joke", jokes);
    updateJokesList();
    // 9 part 2 - call the function to save jokes within this function every time a user adds a new joke
    saveJokes();
}

// 8 - create a function to update our list of jokes BY ADDING THE LIST TO THE SCREEN for the user to see (also works with step 6 - array named "jokes")
var updateJokesList = function(){
    console.log("update jokes list");
// because we already have a good structure of the setup in our html of the related content below...
// ...we can mimic that setup in our script.js here too by doing the following 'for loop' below with the jquery variable we created up top called "jokesHtml"
    var jokesHtml = "";
    for (var i=0; i<jokes.length; i++){
        jokesHtml += '<article>';
        jokesHtml += '<p class="setup">'+jokes[i].setup+'</p>';
        jokesHtml += '<p class="punchline">'+jokes[i].punchline+'</p>';
        jokesHtml += '</article>';
    }
    $jokeList.html(jokesHtml);
}

// 3 - set up event listeners (aka initialize event listeners with a function)
// EVENT LISTENERS are what we use to listen to and react to with what's going on with the web page
var initListeners = function(){
    console.log("init listeners");
    // we want to target the <form> on html by getting the element id "new-joke" and adding a function with jquery to the submit button
    $("#new-joke").submit( function(event){
        event.preventDefault();
        console.log("submitted form");

        // 4 - next, we want to grab the data that is inputted into the submit form by targeting the element id "new-setup" AND "new-punchline" from html
        var newSetup = $("#new-setup").val();
        var newPunchline = $("#new-punchline").val();

        // 5 - create an object with properties for a new joke
        var newJoke = {
            setup: newSetup,
            punchline: newPunchline
        };
        console.log(newJoke);

        // 7 part 2 - to add a NEW JOKE ITEM to the list of jokes which is stored in the array named 'jokes' above --> we need to do the following:
        addJoke(newJoke);
    });

}


// 2 - set up jquery function
// To call the event listener function that we created above named 'initListeners', we need to use 'initListeners()' as seen below in the jquery function:
$(function(){
    console.log("init");
    initListeners();
    // 10 part 2 - call the funciton "loadJokes"
    loadJokes();

});