// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        displaySound(0,"clap","A");
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        displaySound(0,"hihat","S");
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        displaySound(0,"kick","D");
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        displaySound(0,"openhat","F");
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        displaySound(0,"boom","G");
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        displaySound(0,"ride","H");
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        displaySound(0,"snare","J");
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        displaySound(0,"tom","K");
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tinkl
        displaySound(0,"tink","L");
    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function displaySound(number,name) {
    let audio = document.getElementById(name);
    audio.currentTime = number;
    audio.play();
    document.getElementById(alphabet).classList.add("playing");
}