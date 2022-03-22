var main = $('.main');
const garyHead = $("#gary-head-button");
const garyHead_Reset = $("#gary-head");
const jokeContainer = $(".display-joke");
const btnContainer = $(".btn-container");
var joke_1 = $('.joke');
// var storedJokes = [];

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

    var category = $("input[name='category']:checked").val();

    var categoryOrDefault = (category || 'Programming,Misc,Pun,Spooky,Christmas');

    var requestUrl = 'https://v2.jokeapi.dev/joke/' + categoryOrDefault + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit ';
    // console.log(requestUrl)

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var jokeCategory = data.category;
            var jokeType = data.type;

            //note: Christmas and Spooky jokes have two parts (setup and delivery) so API data looks slightly different.
            if (jokeCategory === "Christmas" || jokeCategory === "Spooky" || jokeType === "twopart" ) {
              var jokeIntro = data.setup;
              var jokeMain = data.delivery;

              joke_1.text(`${jokeIntro} ${jokeMain}`)

            } else {
            
              var jokesArray = data.joke;

              joke_1.text(jokesArray);
            }
            typeWriter();
        })
}

  
  // Add submit event to form
  $(".save-btn").on("click", function (){
    var storedJokes = JSON.parse(localStorage.getItem('storedJokes'));
    
    if (storedJokes === null) {
      storedJokes = [];
    }
    
    var jokeText = joke_1.text();
  
    // Add new jokeText to storedJokes array, clear the input
    storedJokes.push(jokeText);

    // Store updated storedJokes in localStorage
    localStorage.setItem("storedJokes", JSON.stringify(storedJokes))

    console.log("saved");
  });
  
$


$('.gary-head').hover(
  function() {
    $(this).css("background-image", "url('assets/img/garymouth.png')");
  },
  function() {
    $(this).css("background-image", "url('assets/img/garybutton.png')");
  }
)

// code source: https://api.jquery.com/hover/
// $(element).hover(function(), function())
// -1st function is mouse in
// -2nd function is mouse out

//function for the typing effect
var i = 0;
var speed = 50;

function typeWriter() {
    if (i < data.joke.length) {
      document.querySelector(".joke").innerHTML += data.joke.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }