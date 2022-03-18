var main = $('.main');
const garyHead = $("#gary-head-button");
const garyHead_Reset = $("#gary-head");
const jokeContainer = $(".display-joke");
const btnContainer = $(".btn-container");

// this means: when page is loaded and jquery is ready, hide the joke container
$(document).ready(function () {
    jokeContainer.hide();
});
// Add a reset button Gary head
garyHead_Reset.on('click', function() {
    generateJoke();
})
// Garyhead click button 
garyHead.on("click", function () {
    btnContainer.hide();
    jokeContainer.show();
    generateJoke();
});

function generateJoke() {

    var category = $("input[type='radio']:checked").val();

    var categoryOrDefault = (category || 'Programming,Misc,Pun,Spooky,Christmas');

    var requestUrl = 'https://v2.jokeapi.dev/joke/' + categoryOrDefault + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single ';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var jokesArray = data.joke;
            var joke_1 = $('.joke')
            joke_1.text(jokesArray);
            // console.log(jokesArray)
        })
}

generateJoke();





