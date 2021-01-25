"use strict";

const $ = selector => document.querySelector(selector);

/* Create an arrow function named calculateFV(). 
   investment amount, interest rate, and number of years. */
const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }

    futureValue = futureValue.toFixed(2);
    return futureValue;
};


/* Create an arrow function named processEntries() that gets the 
   user entries with no data validation.  */
// const processEntries = () => {
 //   const investment = parseFloat($("#investment").value);
 //   const rate = parseFloat($("#rate").value);
 //   const years = parseInt($("#years").value);

    /* Declare a variable that will be used to store an error message right 
    after the constant declarations in the processEntries() function. */
 //  let errorMessage = "";
    

    /* Add an if-else statement that tests whether each entry is valid.  */
 //   if (isNaN(investment) || investment <= 0 || investment > 100000) {
 //       errorMessage = "Investment has to be a number greater than 0 and less than or equal to 100,000";
 //         $("#investment").focus();
 //   } 
 //   else if (isNaN(rate) || rate <= 0 || rate > 15) {
 //       errorMessage = "Rate has to be a number greater than 0 and less than or equal to 15";
 //         $("#rate").focus();
 //  } 
 //   else if (isNaN(years) || years <= 0 || years > 50) {
 //       errorMessage = "Years has to be a number greater than 0 and less than or equal to 50";
 //         $("#years").focus();
 //   }

    /* 1) Code a statement that calls the calculateFV() function
       2) if-else statement that tests whether any errors were detected. */
 //   if (errorMessage == "") {
 //       $("#future_value").value = calculateFV(investment, rate, years);        
 //   } 
 //   else {
 //  alert(errorMessage);
 //   }
//} */

/* Create an event handler for the DOMContentLoaded event  */
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseInt($("#years").value);

        /* Add to this block as well? */
        let errorMessage = "";
    
        /* Add an if-else statement that tests whether each entry is valid. */
        if (isNaN(investment) || investment <= 0 || investment > 100000) {
            errorMessage = "Investment has to be a number greater than 0 and less than or equal to 100,000";
                $("#investment").focus();
        } 
        else if (isNaN(rate) || rate <= 0 || rate > 15) {
            errorMessage = "Rate has to be a number greater than 0 and less than or equal to 15";
                $("#rate").focus();
        } 
        else if (isNaN(years) || years <= 0 || years > 50) {
            errorMessage = "Years has to be a number greater than 0 and less than or equal to 50";
                $("#years").focus();
        }

        /* 1) Code a statement that calls the calculateFV() function
           2) if-else statement that tests whether any errors were detected. */
        if (errorMessage == "") {
            $("#future_value").value = calculateFV(investment, rate, years);        
        } 
        else {
            alert(errorMessage);
        }
    });
    $("#investment").focus();
});