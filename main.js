function cobraRedirect(){
    const bleep = new Audio();
    bleep.src = "cobra-sound.mp3";
    document.cobra.src='img2.svg';
    bleep.play();

    setTimeout(
        function() {
           window.location.href="#sign-in";
        }.bind(this),
        577
    );
}

function cobraStop(){
    cobra.src='img.svg';
}

function punch(){
    const punchSound = new Audio();
    punchSound.src = "/assets/public/sound/punch-sound.mp3";
    punchSound.play();
}