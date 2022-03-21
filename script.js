var main = $('.main');
const garyHead = $("#gary-head-button");
const garyHead_Reset = $("#gary-head");
const jokeContainer = $(".display-joke");
const btnContainer = $(".btn-container");
var joke_1 = $('.joke')
var storedJokes = []

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
    console.log(category);

    var categoryOrDefault = (category || 'Programming,Misc,Pun,Spooky,Christmas');

    var requestUrl = 'https://v2.jokeapi.dev/joke/' + categoryOrDefault + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit ';
    console.log(requestUrl)

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var jokeCategory = data.category;

            //note: Christmas and Spooky jokes have two parts (setup and delivery) so API data looks slightly different.
            if (jokeCategory === "Christmas" || jokeCategory === "Spooky" ) {
              var jokeIntro = data.setup;
              var jokeMain = data.delivery;

              joke_1.text(`${jokeIntro} ${jokeMain}`)

            } else {
              var jokesArray = data.joke;

              joke_1.text(jokesArray);
            }
            
        })
}


  
  // This function is being called below and will run when the page loads.
//   function init() {
//     // Get stored storedJokes from localStorage
//     var storedstoredJokes = JSON.parse(localStorage.getItem("storedJokes"));
  
//     // If storedJokes were retrieved from localStorage, update the storedJokes array to it
//     if (storedstoredJokes !== null) {
//       storedJokes = storedstoredJokes;
//     }
  
//     // This is a helper function that will render storedJokes to the DOM
//   }
  
  function storestoredJokes() {
    // Stringify and set key in localStorage to storedJokes array
    localStorage.setItem("storedJokes", JSON.stringify(storedJokes));
  }
  
  // Add submit event to form
  $(".save-btn").on("click", function (){
    
    
    var jokeText = joke_1.text();
  
    // Return from function early if submitted jokeText is blank
    if (jokeText === "") {
      return;
    }
  
    // Add new jokeText to storedJokes array, clear the input
    storedJokes.push(jokeText);

  
    // Store updated storedJokes in localStorage, re-render the list
    storestoredJokes();
  });
  

//   function renderstoredJokes() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = storedJokes.length;
  
    // Render a new li for each todo
//     for (var i = 0; i < storedJokes.length; i++) {
//       var todo = storedJokes[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete ✔️";
  
//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }



