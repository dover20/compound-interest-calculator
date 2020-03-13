"use strict";

/*jshint esversion: 6 */
//jshint -W117
//jshint -W097 
//jshint -W119

//principal = initial deposit
//interest = interest in percent
//time = number of years deposited for
//nCompounds = how many times compounded per year.

function calculateCompoundInterest() {
    //Gets input values from HTML inputs and stores them
    let inputPrincipal = document.getElementById("inputPrincipal").value;
    let inputPMT = document.getElementById("inputPMT").value;
    let inputInterest = document.getElementById("inputInterest").value;
    let inputTime = document.getElementById("inputTime").value;
    let inputnCompounds = document.getElementById("inputnCompounds").value;

    function compoundInterest( principal, PMT, interest, time, nCompounds ) {
        //Compound interest principal formula https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php
        let principalFormula = principal * Math.pow( (1 + ( (interest / 100) / nCompounds) ), (nCompounds * time) );

        //Monthly deposit formula
        let futureValueFormula = PMT * ( ( (1 + (interest / 100) / nCompounds ) ** (nCompounds * time) - 1 ) / ( (interest / 100) / nCompounds) ) * (1 + (interest / 100) / nCompounds);

        //Output sum of both formulas
        let finalValue = principalFormula + futureValueFormula;

        //Defines variables for HTML elements
        let outputPrincipal = document.getElementById( "principal" );
        let outputInterest = document.getElementById( "interest" );
        let outputTime = document.getElementById( "time" );
        let outputnCompounds = document.getElementById( "nCompounds" );
        let outputPMT = document.getElementById( "PMT" );

        //Writes results to webpage
        outputPrincipal.innerHTML = "The initial deposit is $" + numberWithCommas( principal );
        outputPMT.innerHTML = "with a monthly deposit of $" + numberWithCommas( PMT );
        outputInterest.innerHTML = "at " + interest + "% annual interest";
        //2 years vs 1 year
        if ( time > 1 ) {
            outputTime.innerHTML = "for " + time + " years";
        } else {
            outputTime.innerHTML = "for " + time + " year";
        }
        //2 years vs 1 year
        if ( nCompounds > 1 ) {
            outputnCompounds.innerHTML = "compounded " + nCompounds + " times a year";
        } else {
            outputnCompounds.innerHTML = "compounded " + nCompounds + " time a year";
        }

        return finalValue;
    }

    //Output total to HTML
    let outputTotal = document.getElementById( "total" );
    let compoundInterestFunction = compoundInterest(inputPrincipal, inputPMT, inputInterest, inputTime, inputnCompounds).toLocaleString( undefined, {maximumFractionDigits: 2} );

    outputTotal.innerHTML = "for a total balance of $" + compoundInterestFunction;
}

//adds commas every 3 digits
function numberWithCommas( x ) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//Press enter to run script
document.querySelector("body").onkeydown = function (enter) {
    if ( enter.key === "Enter" ) {
        calculateCompoundInterest();
    }
};