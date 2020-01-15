let intervalID;
let initPosition = 0;
const timeDelay = 100;
const shiftAmount = 256;

function animateScript () {

    function shiftPosition() {

        if (initPosition < 1280) {
            initPosition += shiftAmount;
        } else {
            initPosition =0;
        }

        document.getElementById("sprint-image").style.backgroundPosition = `-${initPosition}px 0px`;
        // console.log(document.getElementById("sprint-image").style.backgroundPosition);
    }

    intervalID = setInterval(shiftPosition, timeDelay);
}

function stopAnimate() {
    clearInterval(intervalID);
}

// reference: https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa