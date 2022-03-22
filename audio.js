var garyLogo = $(".gary-logo");

garyLogo.on("click", function () {
    const music = new Audio('./assets/audio/waytogogary.mp3');
    music.play();
    setTimeout(function(){
        location.href = "main.html";
    }, 1300)
});


