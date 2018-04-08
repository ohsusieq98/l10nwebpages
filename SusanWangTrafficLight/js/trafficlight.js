var redLight = document.querySelector(".redLight");
var yellowLight = document.querySelector(".yellowLight");
var greenLight = document.querySelector(".greenLight");

var btnRed = document.querySelector(".btnRed");
var btnYellow = document.querySelector(".btnYellow");
var btnGreen = document.querySelector(".btnGreen");
var btnCycle = document.querySelector(".btnCycle");
var btnNight = document.querySelector(".btnNight");

var message = document.querySelector(".message");

function goRed() {
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "#424242";
    greenLight.style.backgroundColor= "#424242";
    message.innerHTML = "Red Light!";
}


function goYellow() {
    redLight.style.backgroundColor = "#424242";
    yellowLight.style.backgroundColor = "Yellow";
    greenLight.style.backgroundColor = "#424242"; 
    message.innerHTML = "Yellow Light!";
}


function goGreen() {
    redLight.style.backgroundColor = "#424242";
    yellowLight.style.backgroundColor = "#424242";
    greenLight.style.backgroundColor = "Green";
    message.innerHTML = "Green Light!";
}

function goCycle () {
    goGreen();
    setTimeout(function(){ goYellow () }, 4000);
    setTimeout(function(){ goRed () }, 6000);
    setTimeout(function(){ goCycle () }, 8000);

       
}
function goNight(){
    goRed();
    setTimeout(function(){ goRed () }, 2000);
}


btnRed.addEventListener("click", goRed);
btnYellow.addEventListener("click", goYellow);
btnGreen.addEventListener("click", goGreen);
btnCycle.addEventListener("click",goCycle);
btnNight.addEventListener("click",goNight);