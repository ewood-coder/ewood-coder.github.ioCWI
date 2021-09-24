<?php
/* ******************************************************************
 * Date         Name        Description
 * --------     ---------   ----------------------------------------
 * 9/3/21       Emma        - Initial deployment of thankYou page.
 * 9/17/21      Emma        - Use database and class functions?
 * 9/23/21      Emma        - Connected error page to contact form.
 * 
 * ******************************************************************/
    
    $Message = filter_input(INPUT_POST, 'Message');
    $Name = filter_input(INPUT_POST, 'Name');
    $Email = filter_input(INPUT_POST, 'Email');
    $Phone = filter_input(INPUT_POST, 'Phone');
    $ReasonForContact = filter_input(INPUT_POST, 'ReasonForContact');
    // echo "Fields: " . $Message . $Name . $Email . $Phone . $ReasonForContact;
    
    // Validate inputs
    if ($Message == null || $Name == null || $Email == null || 
            $Phone == null || $ReasonForContact == null) {
        $error = "Invalid input data. Check all fields and try again.";
        include('errorpage.php');
        /* echo "Form Data Error: " . $error; */  // THIS MAKES THE ERROR APPEAR ON THE PAGE
        exit();
        } else {
            require_once('./model/database.php');
            require_once('./model/visit.php');
            addVisit($Message, $Name, $Email, $Phone, $ReasonForContact);      
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Dentlytical Solutions | Thank You</title> <!-- This is an original name (used name generator) -->
    <meta name="author" content="Emma Wood">

    <!-- CSS File -->
    <link href="css/styles.css" rel="stylesheet">

    <!-- JavaScript File -->
    <script src="js/clock.js" defer></script>
    <script src="js/hamburger.js" defer></script>

    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Favicons -->
    <link rel="shortcut icon" href="images/tooth.png"/>
    <!-- Favicon taken from images on Google:
         Dentist in Santa Monica | Drake Dental -->

    <!--  Reference for website taken from https://dentist.boisedentalartsid.com/?
        gclid=Cj0KCQiA0rSABhDlARIsAJtjfCcjn6lwlftKbcq5HZWLuM9x8zzqsrf7dz4_UsglnzfP4DPQuat
        K5i4aAhUfEALw_wcB  -->

    <!--=====================================================================================================================================================
                                            MODIFICATION LOG
        #Original Author: Emma L. Wood
        #Date Created: 1-19-2021
        #Date Mod Log was Created for File: 2-4-2021
        #Last Modified by: Emma L. Wood
        #Date Last Modified: 2-4-2021

        #Modification Log:
            - PREVIOUS LOGS CAN BE FOUND ON HTML
            - 2-4-2021: Added html for desktop navbar
            - 2-17-2021: Fixed scaling issue with image and added extra confirmation text
    =========================================================================================================================================================-->
</head>
<body>
    <header>
        <!-- DESKTOP NAVBAR -->
        <nav class="topNav1">
            <img id="absolute" src="images/mobileLogo100.png" alt="Picture of tooth logo">
            
            <div id="Links">
                <ul>
<!--                    <li><a class="paddingRight1" href="index.html">Home</a></li>
                    <li><a class="paddingRight1" href="FAQ.html">FAQ</a></li>-->
                    <li><a class="paddingRight1" href="contact.html">Contact</a></li>
                    <li><a id ="newsletter1" href="newsletter.html">Newsletter</a></li>
                    <li><a id ="newsletter1" href="admin.php">Admin</a></li>
                    <li><a id ="newsletter1" href="listemployees.php">ListEmp</a></li>
                    <!-- <li><a id ="newsletter1" href="errorpage.php">ErrorCheck</a></li> -->
                </ul>
            </div>
        </nav>

    <!--*********************************************************************************************-->

        <!-- TABLET/MOBILE NAVBAR -->
        <div class="topnav">
            <p id="logo">
                <img id="hideOnMobile" src="images/dentlyticalSolutionsLogo3.png" alt="Picture of tooth logo">
                <img id="hideOnDesktop" src="images/mobileLogo100.png" alt="Picture of tooth logo">
            </p>
            <a class="active"></a>
            <!-- Navigation links (hidden by default) -->
            <div id="myLinks">
<!--                <a href="index.html">Home</a>
                <a href="FAQ.html">FAQ</a>-->
                <a href="contact.html">Contact</a>
                <a href="newsletter.html">Newsletter</a>
                <a href="admin.php">Admin</a>
                <a href="listemployees.php">ListEmp</a>
              <!--  <a href="errorpage.php">ErrorCheck</a> -->
            </div>
            <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div id="timeDate"></div>
    </header>

    <main>
        <section class="boxes1">
            <img class ="checkMark" src="images/checkMark.png" alt="Confirmation Check Mark">
            <p class="textCenter"><b>Your form has been submitted.</b><br></p>
            <h1 class="h11">Thank you for contacting us!</h1>
        </section>
    </main>

    <footer id="footer">
        <a href="https://www.facebook.com/" target="_blank"><img class="facebook" src="images/facebook.png" alt="Facebook Link"></a>
        <a href="https://twitter.com/" target="_blank"><img class="twitter" src="images/twitter.png" alt="Twitter Link"></a>
        <p class="fixFooter">
            &#169; 2021 Dentlytical Solutions<br>
            Email: <a class="whiteColor" href="mailto:DentlyticalSolutions@gmail.com">DentlyticalSolutions@gmail.com</a><br>
            Phone: <a class="whiteColor" href="tel:+12088545633">(208)-854-5633</a><br>
            2275 Eagle Rd, Meridian, Idaho 83642
        </p>
    </footer>
</body>
</html>