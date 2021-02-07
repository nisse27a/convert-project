"use strict";

let enhet1;
let enhet2;
let input;

function SubmitLength() {
    enhet1 = document.querySelector("#length-enhet1");
    enhet2 = document.querySelector("#length-enhet2");
    input = document.querySelector("#length-input").value;
    document.getElementById('length-svar').innerText = CalculateResult(1);
}

function SubmitArea() {
    enhet1 = document.querySelector("#area-enhet1");
    enhet2 = document.querySelector("#area-enhet2");
    input = document.querySelector("#area-input").value;
    document.getElementById('area-svar').innerText = CalculateResult(2);
}

function SubmitVolume() {
    enhet1 = document.querySelector("#volume-enhet1");
    enhet2 = document.querySelector("#volume-enhet2");
    input = document.querySelector("#volume-input").value;
    document.getElementById('volume-svar').innerText = CalculateResult(3);
}

function Enhet(enhet) {
    switch(enhet.value) {
        case "Millimeter":
            return Math.pow(10,-3);
        case "Centimeter":
            return Math.pow(10,-2);
        case "Decimeter":
            return Math.pow(10,-1);
        case "Meter":
            return 1;
        case "Kilometer":
            return Math.pow(10,3);
    }
}

