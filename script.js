var main = $('.main');


function generateMeme(){

    var requestUrl = 'https://api.imgflip.com/get_memes'


    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var memesArray = data.data.memes;
        console.log(memesArray)

        memesArray.forEach(item => {
            var url = item.url

            var img = $(`<img src=${url} alt="meme">`);
            main.append(img);
        })
    })

}

generateMeme();




