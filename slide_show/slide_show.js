"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {   
        $("#caption").hide(1000);
        /* Modify the JavaScript and jQuery so the caption and the image 
           slide up */
        $("#slide").slideUp(2000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                /* Modify the JavaScript and jQuery so the caption and the image 
                   slide up AND THEN BACK DOWN */
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()
});