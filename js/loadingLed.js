var loadingBar = document.getElementById("loading").children;

var count = 0;

function cycleLed(){
    var cycleOff = setInterval(() => {
        loadingBar[count].classList.add("ledOff");
        count = count + 1;
        if(count > 2){
            count = 0;
            resetLed();
            clearInterval(cycleOff);
        }
    }, 150);
}

function resetLed(){
    var cycleOn = setInterval(() => {
        loadingBar[count].classList.remove("ledOff");
        count = count + 1;
        if(count > 2){
            count = 0;
            clearInterval(cycleOn);
        }
    }, 150);
}
