var main = $('.main');


function generateJoke(){

    var category = $("input[type='radio']:checked").val();
    var requestUrl =
      `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;


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






