
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
            const w_sound = new Audio("./assets/sounds/crash.mp3");
            w_sound.play();
            return true;
            break;
        case "a":
            const a_sound = new Audio("./assets/sounds/kick-bass.mp3");
            a_sound.play();
            return true;
            break;
        case "s":
            const s_sound = new Audio("./assets/sounds/snare.mp3");
            s_sound.play();
            return true;
            break;
        case "d":
            const d_sound = new Audio("./assets/sounds/tom-1.mp3");
            d_sound.play();
            return true;
            break;
        case "j":
            const j_sound = new Audio("./assets/sounds/tom-2.mp3");
            j_sound.play();
            return true;
            break;
        case "k":
            const k_sound = new Audio("./assets/sounds/tom-3.mp3");
            k_sound.play();
            return true;
            break;
        case "l":
            const l_sound = new Audio("./assets/sounds/tom-4.mp3");
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