"use strict";

let enhet1;
let koefficient1;
let input;
let enhet2;
let koefficient2;
function Submit() {
    enhet1 = document.querySelector("#enhet1");
    enhet2 = document.querySelector("#enhet2");
    input = document.querySelector("#input").value;
    Enhet(enhet1,1);
    Enhet(enhet2,2);
    document.getElementById('svar').innerText = parseInt(input)*(koefficient1/koefficient2);
    console.log(parseInt(input)*(koefficient2/koefficient1))
}

function Enhet(input, id) {
    switch(input.value) {
        case "Milli":
            console.log("Milli");
            if(id==1) {
                koefficient1 = Math.pow(10,-3);
            } else {
                koefficient2 = Math.pow(10,-3);
            }
            
            break;
        case "Centi":
            console.log("Centi");
            if(id==1) {
                koefficient1 = Math.pow(10,-2);
            } else {
                koefficient2 = Math.pow(10,-2);
            }
            break;
        case "Deci":
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
        case "Kilo":
            console.log("Kilo");
            if(id==1) {
                koefficient1 = Math.pow(10,3);
            } else {
                koefficient2 = Math.pow(10,3);
            }
            break;
    }
}

