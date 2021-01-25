"use strict";

const $ = selector => document.querySelector(selector);

/* be sure that a different error message is displayed for a text 
box if it contains nonnumeric data versus if it contains a value 
less than or equal to zero.  */
const getNumericErrorMsg = lbl => `${lbl} must be a valid number.`;
const getRangeErrorMsg = lbl => `${lbl} must be greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    /* Modify the if-else statement that provides the data 
       validation so a different error message is displayed 
       for each entry  */
    if (isNaN(miles)) {
        alert(getNumericErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert(getRangeErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    }
    else if (isNaN(gallons)) {
        alert(getNumericErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert(getRangeErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    }
    else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
    
    /*=============================
        In Case Code Above Breaks
    ===============================*/

   /* if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    } */
};

/* Add an arrow function named clearEntries() that clears the entries  */
const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").focus();
}

/* 1) Next, add a statement in the DOMContentLoaded event 
      handler that attaches the clearEntries() function to the 
      click event of the Clear Entries button.  
   2) Add a statement to the DOMContentLoaded event handler that 
      attaches the clearEntries() function to the double-click event 
      of the miles text box.  */

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").addEventListener("dblclick", clearEntries);
    $("#miles").focus();
});


/*=============================
    In Case Code Above Breaks
===============================
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
}); */