var allButtons = document.querySelectorAll(".drum");

for( var i = 0; i < allButtons.length; i++ ) {
    allButtons[i].addEventListener("click",  function() {
        playMusicNow(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
)}

document.addEventListener("keydown", function(event) {
    playMusicNow(event.key);
    buttonAnimation(event.key);
});

  
function playMusicNow(a) {
    switch(a) {
        case "w":
            var myAudioW = new Audio("./sounds/tom-1.mp3");
            myAudioW.play();
            break;
        case "a":
            var myAudioA = new Audio("./sounds/tom-2.mp3");
            myAudioA.play();
            break;
        case "s":
            var myAudioS = new Audio("./sounds/tom-3.mp3");
            myAudioS.play();
            break;
        case "d":
            var myAudioD = new Audio("./sounds/tom-4.mp3");
            myAudioD.play();
            break;
        case "j":
            var myAudioJ = new Audio("./sounds/snare.mp3");
            myAudioJ.play();
            break;
        case "k":
            var myAudioK = new Audio("./sounds/crash.mp3");
            myAudioK.play();
            break;
        case "l":
            var myAudioL = new Audio("./sounds/kick-bass.mp3");
            myAudioL.play();
            break;
        default:
            console.log(this.textContent);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
