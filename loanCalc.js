"use strict";

/*jshint esversion: 6 */
//jshint -W117
//jshint -W097

function calculateLoanAmount() {
    //Gets input values from HTML inputs and stores them
    let inputLoanAmount = document.getElementById("inputPrincipal").value;
    let inputInterest = document.getElementById("inputInterest").value;
    let inputTime = document.getElementById("inputTime").value;

    function loanCalc(loanAmount, interest, time) {
        let monthlyPayment = (loanAmount * (interest / 100)) / 12;

        //Output sum of formula
        let finalValue = monthlyPayment;

        //Defines variables for HTML elements
        let outputLoanAmount = document.getElementById("loanAmount");
        let outputInterest = document.getElementById("interest");
        let outputTime = document.getElementById("time");

        //Writes data to HTML
        outputLoanAmount.innerHTML = "The loan amount is $" + numberWithCommas(loanAmount);
        outputInterest.innerHTML = "at " + interest + "% annual interest";
        outputTime.innerHTML = "for " + time + " years";

        return finalValue;
    }

    //Output total to HTML
    let outputTotal = document.getElementById("total");

    outputTotal.innerHTML = "Your monthly payment is $" + loanCalc(inputLoanAmount, inputInterest, inputTime).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    //adds commas every 3 digits
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}

//Press enter to run script
document.querySelector("body").onkeydown = function (enter) {
    if (enter.key === "Enter") {
        calculateLoanAmount();
    }
};