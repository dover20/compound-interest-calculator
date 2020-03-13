"use strict";

/*jshint esversion: 6 */
//jshint -W117
//jshint -W097 
//jshint -W119

function calculateMph() {
    let inputMPH = document.getElementById("inputKPH").value;

    function mphToKphFormula(inputKPH) {
        let finalResult = inputKPH / 1.609344;
        return finalResult;
    }

    //defines html output variables
    let outputMPH = document.getElementById("speedKPH");
    let outputKPH = document.getElementById("totalInMPH");

    //writes output to html
    outputMPH.innerHTML = numberWithCommas(inputMPH) + " KM/H";
    outputKPH.innerHTML = mphToKphFormula(inputMPH).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    }) + " MPH";

    //adds commas every 3 digits
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}

//Pressing enter runs the script
document.querySelector("body").onkeydown = function (enter) {
    if (enter.key === "Enter") {
        calculateMph();
    }
};