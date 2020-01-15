//Reference: Angela Yu's 'The Complete Web Developer Bootcamp' Course on Udemy

// declare all the audio objects
const w_sound = new Audio("./assets/sounds/crash.mp3");
const a_sound = new Audio("./assets/sounds/kick-bass.mp3");
const s_sound = new Audio("./assets/sounds/snare.mp3");
const d_sound = new Audio("./assets/sounds/tom-1.mp3");
const j_sound = new Audio("./assets/sounds/tom-2.mp3");
const k_sound = new Audio("./assets/sounds/tom-3.mp3");
const l_sound = new Audio("./assets/sounds/tom-4.mp3");

// add event listeners to all the button elements
btnList = document.querySelectorAll(".btn");
btnListLength = btnList.length;
for (let i =0; i<btnListLength; i++) {
    btnList[i].addEventListener("click", function() {
        key = this.innerHTML.toLowerCase();
        keyFound = makeSound(key);
        animatePress(key);
    })
}

document.addEventListener("keydown", (event) => {
    key = event.key;
    key = key.toLowerCase();
    keyFound = makeSound(key);
    if (keyFound) {
        animatePress(key);
    }
})

function makeSound(key){
    switch (key) {
        case "w":
            w_sound.play();
            return true;
            break;
        case "a":
            a_sound.play();
            return true;
            break;
        case "s":
            s_sound.play();
            return true;
            break;
        case "d":
            d_sound.play();
            return true;
            break;
        case "j":
            j_sound.play();
            return true;
            break;
        case "k":
            k_sound.play();
            return true;
            break;
        case "l":
            l_sound.play();
            return true;
            break;

        default:
            return false;
            break;

    }
}

function animatePress(key){
    let classList_ = document.querySelector("." + key).classList;
    classList_.add("pressed");
    timeoutID = setTimeout(() => classList_.remove("pressed"), 100);
}