"use strict";

$(document).ready( () => {

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            localStorage.E14tasks = tasks.concat(task, "\n");

            /* create a new Date object for today’s date and add 21 days to that date. */
            let expire = new Date();
            expire.setDate( expire.getDate() + 21 );
            localStorage.expiration = expire.toDateString();

            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(localStorage.E14tasks);
                 
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        /* add code that removes the expiration item from local storage */
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration");        
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    /* $("#task_list").val(localStorage.E14tasks); */

    const expiration = new Date(localStorage.expiration);
    const today = new Date();
    /* Code an if statement that checks whether the expiration date is in the past. */
    if ( expiration.getTime() < today.getTime() ) {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration");
    } 
    else {
        $("#task_list").val(localStorage.E14tasks);
    }
    $("#task").focus();
});