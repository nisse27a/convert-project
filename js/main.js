"use strict";

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