"use strict";

// change the toggle() event handler so it works with the <a> elements.
const toggle = evt => {
    const linkElement = evt.currentTarget;                 // get the clicked linked element
    const h2Element = linkElement.parentNode;            /* get the h2 tag for the <a> tag */
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

    /* h2Element.classList.toggle("minus"); */
    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class");
    }
    else {
        h2Element.className="minus";
    }
    /*================================================================*/
    
    /* divElement.classList.toggle("open"); */
    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    } 
    else {
        divElement.className="open";
    }
    /*================================================================*/

    evt.preventDefault();   /* cancel action of the <a> tag */
};

document.addEventListener("DOMContentLoaded", () => {
    /* get the <a> tags */
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    /* attach event handler for each <a> tag */   
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }

    /* set focus on first <a> tag */
    linkElements[0].focus();
});