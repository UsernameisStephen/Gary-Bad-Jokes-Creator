var main = $('.main');

function generateJoke(){

    var category = $("input[type='radio']:checked").val();

    var categoryOrDefault = (category || 'Programming,Misc,Pun,Spooky,Christmas');

    var requestUrl = 'https://v2.jokeapi.dev/joke/' + categoryOrDefault + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var jokesArray = data.joke;
        var joke_1 = $('.joke')
        joke_1.textContent = jokesArray;
    })   
}

generateJoke();

const garyHead = document.getElementById("gary-head");
button.addEventListener("click", function () {
console.log(generateJoke());
generateJoke();
});


// move variables to top of page
const jokeContainer = $(".display-joke");
const garyBtnContainer = $(".btn-container");
const joke = $(".joke") //the joke text box

// move to top after all the variables
// this means: when page is loaded and jquery is ready, hide the joke container
$(document).ready(function() {
    jokeContainer.hide();
});


// add this to garyHead click event listener
btnContainer.hide();
displayJokeContainer.show();






