"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    var links = $("#image_list").querySelectorAll("a");

    /* add code that uses the links array to preload the four images  */
    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // attach mouseover and mouseout events for each image
    /* Add code to the mouseover and mouseout event handlers  */
    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "images/release.jpg";
        });

        image1.addEventListener("mouseout", () => {
            image1.src = "images/hero.jpg";
        });

        image2.addEventListener("mouseover", () => {
            image2.src = "images/deer.jpg";
        });

        image2.addEventListener("mouseout", () => {
            image2.src = "images/bison.jpg";
        });         
    }

});
