"use strict";

/* Move the code that calculates the average score to a helper function 
   outside of the ready() event handler */
const getAvgScore = scores => {
    const total = scores.reduce( (tot, val) => tot + val, 0 );
    const avg = total/scores.length;
    return avg.toFixed(2);
};
/* Repeat the previous step for the code that gets the last three scores */
const getLast3Scores = scores => {
    let last3Scores = [];
    const len = scores.length;
    last3Scores = (len <= 3) ? scores.slice() : scores.slice(len - 3, len);
    last3Scores.reverse();
    return last3Scores;
};
const updateDisplay = scores => {
    $("#all").text(scores.join(", "));
    $("#avg").text(getAvgScore(scores));
    $("#last").text(getLast3Scores(scores).join(", "));
}

$(document).ready( () => {

    const scores = [];

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be between 0 and 100."); 
        }
        else {
            $("#add_score").next().text("");  
            scores.push(score);
            updateDisplay(scores);
        }
        $("#score").val("");
        $("#score").focus();  
    });

    /* Code the click() event handler for the Delete Score button */
    $("#delete_score").click( () => {
        const index = parseInt($("#index").val());
        /* Add data validation to the click() event handler for the Delete Score button */
        if (isNaN(index)) {
            $("#delete_score").next().text("Index must be a whole number.");
        } 
        else if (index < 0 || index > scores.length - 1) {
            $("#delete_score").next().text("There is no element with that index.")
        } 
        else {
            $("#delete_score").next().text("");
            scores.splice(index, 1);
            updateDisplay(scores);
        }
        $("#index").val("");
        $("#score").focus();
    });
    $("#score").focus();
});