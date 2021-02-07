"use strict";

let enhet1;
let enhet2;
let input;

function SubmitValuta() {
    enhet1 = document.querySelector("#valuta1");
    enhet2 = document.querySelector("#valuta2");
    console.log(enhet2);
    input = document.querySelector("#valuta-input").value;
    document.getElementById('valuta-svar').innerText = CalculateResult(1);
    console.log("hej");
    console.log(CalculateResult(1));
}

function Enhet(enhet) {
    switch(enhet.value) {
        case "GBP":
            return 11.5;
        case "USD":
            return 8.37;
        case "SEK":
            return 1;
    }
}