"use strict";
let enhet1;
let enhet2;
let input;

function SubmitBak() {
    enhet1 = document.querySelector("#bak-enhet1");
    enhet2 = document.querySelector("#bak-enhet2");
    input = document.querySelector("#bak-input").value;
    document.getElementById('bak-svar').innerText = CalculateResult(1);
    console.log(CalculateResult(1));
}

function CalculateResult(exponent) {
    let decimaler;
    let koefficient1 = Enhet(enhet1);
    let koefficient2 = Enhet(enhet2);
    if(koefficient1>koefficient2) {
        decimaler = Math.pow(koefficient1/koefficient2, exponent);
    } else {
        decimaler = Math.pow(koefficient2/koefficient1,exponent);
    }
    return Math.round((parseInt(input)*(Math.pow(koefficient1,exponent)/Math.pow(koefficient2, exponent)))*decimaler)/decimaler;
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