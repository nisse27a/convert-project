"use strict";
document.getElementsByTagName("fieldset")[0].scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
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

let acc = document.getElementsByClassName("accordion");

for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display ==="block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
            panel.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
        }
    })
}