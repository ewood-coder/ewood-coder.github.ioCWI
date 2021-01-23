"use strict";

let highestScore = 0; /* <-- Declare a variable named highestScore at the start of the script */
const scores = [];

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    for (let i in scores) {     /* <--  modify the other for loop  */
        total = total + scores[i];

        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }

        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);

    /*==========================
          Add a for-of loop 
     ===========================
    for (let val of scores) {  <-- When you’ve got that working, comment out the for-of loop that you just coded. 
        if (val > highestScore) {
            highestScore = val;
        }
    } */

    document.write(`<p>Highest score is ${highestScore}</p>`)
}