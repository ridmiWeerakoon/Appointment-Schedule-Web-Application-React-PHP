<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {



    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        // Query the database to check user credentials
        $sql = "SELECT * FROM cuser WHERE username = :username AND password= :password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        $stmt->execute();

        $authenticatedUser = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($authenticatedUser) {
            // Authentication successful, return a success response
            $response = ['status' => 1, 'message' => 'Authentication successful.'];
        } else {
            // Authentication failed, return an error response
            $response = ['status' => 0, 'message' => 'Authentication failed.'];
        }
        echo json_encode($response);
        break;






}