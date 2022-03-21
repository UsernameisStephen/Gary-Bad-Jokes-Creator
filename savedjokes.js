// global variables
var collection = $('.collection');
var clearBtn = $('.clear');

//function to get items from local storage and generate a speech bubble dynamically displaying the jokes
function getJokes(){

    var favoriteJokes = JSON.parse(localStorage.getItem ('storedJokes'));

    if (favoriteJokes !== null) {
        for (var i=0; i<favoriteJokes.length; i++){
            var jokeCollection = $(`
                <div class="joke-collection">
                    <div class="joke">${favoriteJokes[i]}</div>
                </div>
            `)
            console.log(favoriteJokes[i]);
            collection.append(jokeCollection);
        }
    }
    
} 

getJokes();

clearBtn.on("click", clearJokes)

function clearJokes() {
    collection.html("");
    localStorage.clear();
}


