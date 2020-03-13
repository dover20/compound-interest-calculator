"use strict";

/*jshint esversion: 6 */
//jshint -W117
//jshint -W097 
//jshint -W119

function calculateKph() {
    let inputMPH = document.getElementById("inputMPH").value;

    function mphToKphFormula(inputMPH) {
        let finalResult = inputMPH * 1.609344;
        return finalResult;
    }

    //defines html output variables
    let outputMPH = document.getElementById("speedMPH");
    let outputKPH = document.getElementById("totalInKPH");

    //writes output to html
    outputMPH.innerHTML = numberWithCommas(inputMPH) + " MPH";
    outputKPH.innerHTML = mphToKphFormula(inputMPH).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    }) + " km/h";

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
        calculateKph();
    }
};