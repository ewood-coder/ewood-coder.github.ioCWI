<?php
/* ******************************************************************
 * Date         Name        Description
 * --------     ---------   ----------------------------------------
 * 9/10/21      Emma        - Initial deployment of admin process.
 * 9/17/21      Emma        - Use database class, employee & 
 *                            visit functions.
 * 
 * ******************************************************************/
require_once('./model/database.php');
require_once('./model/employee.php');
require_once('./model/visit.php');
    
    // Check action; on initial load it is null
    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL) {
        $action = filter_input(INPUT_GET, 'action');
        if ($action == NULL) {
            $action = 'list_visits';
        }
    }
    
    if ($action == 'list_visits') {
       
        $employee_id = filter_input(INPUT_GET, 'employee_id', FILTER_VALIDATE_INT);
        if ($employee_id == NULL || $employee_id == FALSE) {
            $employee_id = 1;
        }

        try {
            
            $employees = EmployeeDB::getEmployeeList();
            
            $visits = getVisitByEmp($employee_id);
            
        } catch (PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    } else if ($action == 'delete_visit') {
        delVisit($contact_id);
        //echo $contact_id;
        header("Location: admin.php");
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

    <main>
        <section class="blueBack2">
        <h1>Admin</h1>
        <h3>Select an employee to view messages.</h3>
        <aside>
            <ul style="list-style-type:none; ">
                <?php foreach ($employees as $employee) : ?>
                <li>
                    <a href="?employee_id=<?php echo $employee['employee_id']; ?>">
                        <?php echo $employee['first_name'] . ' ' . $employee['last_name']?>
                    </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </aside>
        <table>
            <tr>
                <th>Message</th>
                <th>Your name</th>
                <th>Contact reason</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Contact date</th>
            </tr>
            <?php foreach ($visits as $contact) : ?>
            <tr>
                <td><?php echo $contact['contact_msg']; ?></td>
                <td><?php echo $contact['your_name']; ?></td>
                <td><?php echo $contact['contact_reason']; ?></td>
                <td><?php echo $contact['phone_number']; ?></td>
                <td><?php echo $contact['email_address']; ?></td>
                <td><?php echo $contact['contact_date']; ?></td>
                <td>
                    <form action="admin.php" method="post">
                        <input type="hidden" name="action" value="delete_visit"/>
                        <input type="hidden" name="contact_id" 
                               value="<?php echo $contact['contact_id']; ?>"/>
                        <input type="submit" value="Delete"/>
                    </form>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        </section>
    </main>

<!--    <footer id="footer">
        <a href="https://www.facebook.com/" target="_blank"><img class="facebook" src="images/facebook.png" alt="Facebook Link"></a>
        <a href="https://twitter.com/" target="_blank"><img class="twitter" src="images/twitter.png" alt="Twitter Link"></a>
        <p class="fixFooter">
            &#169; 2021 Dentlytical Solutions<br>
            Email: <a class="whiteColor" href="mailto:DentlyticalSolutions@gmail.com">DentlyticalSolutions@gmail.com</a><br>
            Phone: <a class="whiteColor" href="tel:+12088545633">(208)-854-5633</a><br>
            2275 Eagle Rd, Meridian, Idaho 83642
        </p>
    </footer>-->
</body>
</html>