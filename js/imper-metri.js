"use strict";

let enhet1;
let enhet2;
let input;

function SubmitImper() {
    enhet1 = document.querySelector("#imper-enhet1");
    enhet2 = document.querySelector("#imper-enhet2");
    input = document.querySelector("#imper-input").value;
    document.getElementById('imper-svar').innerText = CalculateResult(1) + " " + enhet2.value;
}

function Enhet(enhet) {
    switch (enhet.value) {
        case "Centimeter":
            return Math.pow(10,-2);
        case "Meter":
            return 1;
        case "Kilometer":
            return Math.pow(10,3);
        case "Inch":
            return 0.0254;
        case "Foot":
            return 0.3048;
        case "Yard":
            return 0.9144;
        case "Mile":
            return 1609.344;
    }
}