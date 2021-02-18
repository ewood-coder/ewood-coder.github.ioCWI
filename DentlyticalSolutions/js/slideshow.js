/*=====================================================================================================================================================
                                            MODIFICATION LOG
#Original Author: Emma L. Wood
#Date Created: 1-18-2021
#Date Mod Log was Created for File: 2-5-2021
#Last Modified by: Emma L. Wood
#Date Last Modified: 2-5-2021

#Modification Log:
    - 2-5-2021:  Added JQuery function for slideshow
=========================================================================================================================================================*/

$(document).ready(function() {
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        mobileFirst: true,
    });
});