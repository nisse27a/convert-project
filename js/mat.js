"use strict";
let enhet1;
let enhet2;
let input;

function SubmitBak() {
    enhet1 = document.querySelector("#bak-enhet1");
    enhet2 = document.querySelector("#bak-enhet2");
    input = document.querySelector("#bak-input").value;
    document.getElementById('bak-svar').innerText = CalculateResult(1) + " " + enhet2.value;
}

function Enhet(enhet) {
    switch(enhet.value) {
        case "Milliliter":
            return 1;
        case "Kryddmått":
            return 1;
        case "Tesked":
            return 5;
        case "Matsked":
            return 15;
        case "Kaffemått":
            return 25;
        case "Deciliter":
            return 100;
    }
}