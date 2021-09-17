<?php

/* ******************************************************************
 * Date         Name        Description
 * --------     ---------   ----------------------------------------
 * 9/17/21      Emma        - Initial deployment of the database class.
 * 
 * ******************************************************************/
class Database {
    private static $dsn = 'mysql:host=localhost;dbname=ejdesign';
    private static $username = 'ej_user';
    private static $password = 'Pa$$w0rd';
    private static $db;

    private function __construct() {}

    public static function getDB () {
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$dsn,
                                     self::$username,
                                     self::$password);
            } catch (PDOException $e) {
                $error_message = $e->getMessage();
                //include('../errors/database_error.php');
                echo 'Error connecting with ' . self::$username;
                exit();
            }
        }
        return self::$db;
    }
}
?>