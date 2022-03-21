var garyLogo = $(".gary-logo");

garyLogo.on("click", function () {
    const music = new Audio('./assets/audio/boy-says-volcano-2439.mp3');
    music.play();
    setTimeout(function(){
        location.href = "index.html";
    }, 1500)
});
