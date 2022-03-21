// global variables
var collection = $('.collection');

//function to get items from local storage and generate a speech bubble dynamically displaying the jokes
function getJokes(){
    var favoriteJokes = JSON.parse(localStorage.getItem ('storedJokes'));
    
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
getJokes();

