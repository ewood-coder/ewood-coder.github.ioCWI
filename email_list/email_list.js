const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        /* Use a Boolean variable to keep track of 
           whether any entries are invalid.  */
           let isValid = true;

        // check user entries - add text to error message if invalid
        /* Enhance the data validation so it displays the error messages 
           in the span elements. */
        if (email1.value == "") {
            email1.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        } 
        else {
            email1.nextElementSibling.textContent = "";
        }
        /*=======================================================================*/
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        } 
        else {
            email2.nextElementSibling.textContent = "";
        }
        /*=======================================================================*/
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Email addresses must match.";
            isValid = false; 
        }
        /*=======================================================================*/
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        } 
        else {
            firstName.nextElementSibling.textContent = "";
        }

        /* if all of the entries are valid, you can submit the form. */
        if (isValid) {
            $("#email_form").submit();
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});