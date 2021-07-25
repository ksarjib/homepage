    
var textArea, i=0, l, startBtn, frameArray, stopBtn, animationType, animationAscii, sizeOptions, speed = 250, turbo, interval;
window.onload = function () {
    "use strict";
    textArea = document.getElementById("text-area");
    startBtn = document.getElementById("start");
    stopBtn = document.getElementById("stop");
    animationType = document.getElementById("animation");
    sizeOptions = document.getElementById("fontsize");
    turbo = document.getElementById("turbo");

    startBtn.onclick = startAnimation;
    stopBtn.onclick = stopAnimation;
    animationType.onchange = getAnimationAscii;
    sizeOptions.onchange = changeSize;
    turbo.onchange = isturbo;

}

function recursive() {
    textArea.value = frameArray[i];
    if (++i >= l) {
        i = 0;
    }
}

function startAnimation() {
    if(animationAscii){
        if(animationType.value != 'Blank') {
            stopBtn.disabled = false;
            animationType.disabled = true;
            startBtn.disabled = true;
        }
        frameArray = animationAscii.split("=====\n");
        l = frameArray.length;
        interval = setInterval(recursive, speed);
    }
};

function stopAnimation(time) {
    if(animationAscii){
        textArea.value = animationAscii.split("=====\n")[0];
    }
    stopBtn.disabled = true;
    startBtn.disabled = false;
    animationType.disabled = false;
    clearInterval(interval);
    getAnimationAscii();
}


function getAnimationAscii() {
    var selectedAnimation = animationType.options[animationType.selectedIndex].value;
    animationAscii = ANIMATIONS[selectedAnimation];
}

function changeSize() {
    var fontsize = sizeOptions.options[sizeOptions.selectedIndex].value;
    textArea.style.fontSize = fontsize;
}

function isturbo() {
    if (turbo.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
    clearInterval(interval);
    interval = setInterval(recursive, speed);
}

