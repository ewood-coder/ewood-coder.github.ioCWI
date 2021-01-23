"use strict";

let again = "y"
do { /* <-- add a do-while statement to the applica-tion like the one for the MPG application  */
    
    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while ( isNaN(investment)  || investment <= 0); /* <-- Update the condition for the do-while statement for each user entry  */

    
    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while ( isNaN(rate) || rate <= 0 || rate >= 15); /* <-- Update the condition for the do-while statement for each user entry  */

    
    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while ( isNaN(years) || years <= 0); /* <-- Update the condition for the do-while statement for each user entry  */
    
    
    document.write(`<h4>Investment amount = ${investment}
    Interest rate = ${rate} Years = ${years}</h4>`);

    
    // calulate future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        /* futureValue = futureValue + (futureValue * rate / 100); */
        const interest = futureValue * rate / 100;
        futureValue = futureValue + interest;

        document.write(`<p>Year=${i} Interest=${interest.toFixed(2)}
        Value=${futureValue.toFixed(2)}</p>`);
    }
    again = prompt("Repeat entries? (y/n)", "y");
}
while (again == "y");

/*====================
    display results
======================*/
document.write(html);



/*=============================
        Unecessary Code
===============================*/
/* document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`); */



/*============================
        FOR REFERENCE
==============================*/
/* let again = "y";
do {
    const miles = parseInt(prompt("Enter miles driven"));
    const gallons = parseInt(prompt("Enter gallons of gas used"));

    if (miles > 0 && gallons > 0) { 
        const mpg = parseFloat(miles/gallons);

        const html = `<p>${miles} miles on ${gallons}
            gallons = ${mpg.toFixed(2)} MPG</p>`;
        document.write(html); 
    } 
    else { 
        alert("One or both entries are invalid"); 
    } 
    again = prompt("Repeat entries? (y/n)", "y"); 
} 
while (again == "y"); */