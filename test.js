const jokeContainer = $(".display-joke");
const garyBtnContainer = $(".btn-container");
const garyHead = $("#gary-head-button");


$(document).ready(function() {
    jokeContainer.hide();
});



// hides the display container
// displayContainer.hide();

// shows the display container
// displayContainer.show();

// joke api link: https://sv443.net/jokeapi/v2/
// note: blacklist all inappropriate content





garyHead.on("click", function () {

    garyBtnContainer.hide();
    jokeContainer.show();
// console.log(generateJoke());
// generateJoke();
});


// add this to garyHead click event listener
const displayJokeContainer = $(".display-joke");
const btnContainer = $("btn-container");
btnContainer.hide();
displayJokeContainer.show();
