<?php
/* ******************************************************************
 * Date         Name        Description
 * --------     ---------   ----------------------------------------
 * 9/17/21      Emma        - Initial deployment of visit functions.
 * 
 * ******************************************************************/

function getVisitByEmp($employee_id) {
    $db = Database::getDB();
    $query2 = 'SELECT contact_id, contact.contact_msg, contact.your_name,
              contact.contact_reason, contact.phone_number, contact.email_address, 
              contact.contact_date
              FROM contact
              JOIN employee on contact.employee_id = employee.employee_id
              WHERE employee.employee_id = :employee_id
              ORDER BY contact_date';
    $statement2 = $db->prepare($query2);
    $statement2->bindValue(":employee_id", $employee_id);
    $statement2->execute();
    $visits = $statement2;

    return $visits;
}

function delVisit($contact_id) {
    $db = Database::getDB();
    $contact_id = filter_input(INPUT_POST, 'contact_id', FILTER_VALIDATE_INT);
        $query = 'DELETE from contact WHERE contact_id = :contact_id';
        $statement = $db->prepare($query);
        $statement->bindValue(":contact_id", $contact_id);
        $statement->execute();
        $statement->closeCursor();
}

function addVisit($Message, $Name, $Email, $Phone, $ReasonForContact) {
    $db = Database::getDB();
    $query = 'INSERT INTO contact
                (contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
                VALUES
                (:Message, :Name, :Email, :Phone, :ReasonForContact , NOW(), 1);';
            $statement = $db->prepare($query);
            $statement->bindValue(':Message', $Message);
            $statement->bindValue(':Name', $Name);
            $statement->bindValue(':Email', $Email);
            $statement->bindValue(':Phone', $Phone);
            $statement->bindValue(':ReasonForContact', $ReasonForContact);
            $statement->execute();
            $statement->closeCursor();
}
?>