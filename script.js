var main = $('.main');
var garyLogo = $(".gary-logo");


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



garyLogo.on("click", function() {
    const music = new Audio('./assets/audio/boy-says-volcano-2439.wav');
    music.play();       
    });






