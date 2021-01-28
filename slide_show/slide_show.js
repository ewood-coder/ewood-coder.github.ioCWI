"use strict";

const $ = selector => document.querySelector(selector);
    
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   // the img element for the show
const caption = $("#caption");        // the h2 element for the caption

const runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach start and pause event handlers
    /*  add code to the click event handler of the Start button that creates a timer  */
    $("#start").addEventListener("click", () => {
        runSlideShow();
        timer = setInterval(runSlideShow, 2000);
        /* add code that disables the Start button and enables the Pause button */
        $("#start").disabled = true;
        $("#pause").disabled = false;
    });

    /* add code that enables the Start button and 
    disables the Pause button. */
    $("#pause").addEventListener("click", () => {
        clearInterval(timer);
        $("#start").disabled = false;
        $("#pause").disabled = true;
    });
});
