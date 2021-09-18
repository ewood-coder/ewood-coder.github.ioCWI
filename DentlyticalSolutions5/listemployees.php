<?php
/* ******************************************************************
 * Date         Name        Description
 * --------     ---------   ----------------------------------------
 * 9/17/21      Emma        - Initial deployment of listemployees page.
 * 
 * ******************************************************************/

require_once('./model/database.php');
require_once('./model/employee.php');

$employees = EmployeeDB::getEmployees();

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
</head>
<main>
    <header>
        <!-- DESKTOP NAVBAR -->
        <nav class="topNav1">
            <img id="absolute" src="images/mobileLogo100.png" alt="Picture of tooth logo">
            
            <div id="Links">
                <ul>
                    <li><a class="paddingRight1" href="index.html">Home</a></li>
                    <li><a class="paddingRight1" href="FAQ.html">FAQ</a></li>
                    <li><a class="paddingRight1" href="contact.html">Contact</a></li>
                    <li><a id ="newsletter1" href="newsletter.html">Newsletter</a></li>
                    <li><a id ="newsletter1" href="admin.php">Admin</a></li>
                    <li><a id ="newsletter1" href="listemployees.php">ListEmp</a></li>
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
                <a href="index.html">Home</a>
                <a href="FAQ.html">FAQ</a>
                <a href="contact.html">Contact</a>
                <a href="newsletter.html">Newsletter</a>
                <a href="admin.php">Admin</a>
                <a href="listemployees.php">ListEmp</a>
            </div>
            <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div id="timeDate"></div>
    </header>
    
    
    <section class="blueBack">
        <h1>Employee List</h1>
        <p>
            <ul>
                <?php foreach ($employees as $employee) : ?>
                <li><?php echo $employee->getLastName() . ', ' . $employee->getFirstName(); ?></li>
                <?php endforeach; ?>
            </ul>
        </p>
    </section>
</main>
</html>