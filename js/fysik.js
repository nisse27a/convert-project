"use strict";

let enhet1;
let koefficient1;
let enhet2;
let koefficient2;
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

function CalculateResult(exponent) {
    let decimaler;
    Enhet(enhet1,1);
    Enhet(enhet2,2);
    if(koefficient1>koefficient2) {
        decimaler = Math.pow(koefficient1/koefficient2, exponent);
    } else {
        decimaler = Math.pow(koefficient2/koefficient1,exponent);
    }
    return Math.round((parseInt(input)*(Math.pow(koefficient1,exponent)/Math.pow(koefficient2, exponent)))*decimaler)/decimaler;
}

function Enhet(enhet, id) {
    switch(enhet.value) {
        case "Millimeter":
            console.log("Millimeter");
            if(id==1) {
                koefficient1 = Math.pow(10,-3);
            } else {
                koefficient2 = Math.pow(10,-3);
            }
            break;
        case "Centimeter":
            console.log("Centi");
            if(id==1) {
                koefficient1 = Math.pow(10,-2);
            } else {
                koefficient2 = Math.pow(10,-2);
            }
            break;
        case "Decimeter":
            console.log("Deci");
            if(id==1) {
                koefficient1 = Math.pow(10,-1);
            } else {
                koefficient2 = Math.pow(10,-1);
            }
            break;
        case "Meter":
            console.log("Meter");
            if(id==1) {
                koefficient1 = 1;
            } else {
                koefficient2 = 1;
            }
            break;
        case "Kilometer":
            console.log("Kilo");
            if(id==1) {
                koefficient1 = Math.pow(10,3);
            } else {
                koefficient2 = Math.pow(10,3);
            }
            break;
    }
}

