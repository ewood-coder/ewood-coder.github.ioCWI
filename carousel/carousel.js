"use strict";
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 100 > -900) {
            newLeftProperty = leftProperty - 100;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        /* Modify the JavaScript and jQuery code so the carousel moves 
           one book at a time when you click on one of the buttons instead 
           of three books at a time. */
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = -800;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});