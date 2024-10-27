<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database configuration
$host = 'localhost';
$dbname = 'fnb';
$username = 'root';  // Replace with your MySQL username
$password = '';      // Replace with your MySQL password

// Response array
$response = array();

try {
    // Create database connection
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get JSON input
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Validate input
    if (!isset($data['email']) || !isset($data['password'])) {
        throw new Exception("Email and password are required");
    }
    
    // Sanitize input
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $password = $data['password'];
    
    // Prepare and execute select statement
    $stmt = $conn->prepare("
        SELECT id, full_name, email, password 
        FROM skills_users 
        WHERE email = ?
    ");
    
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user && password_verify($password, $user['password'])) {
        // Remove password from user data before sending
        unset($user['password']);
        
        // Create session token (optional, for enhanced security)
        $sessionToken = bin2hex(random_bytes(32));
        
        $response['success'] = true;
        $response['message'] = "Login successful";
        $response['user'] = $user;
        $response['token'] = $sessionToken;
    } else {
        throw new Exception("Invalid email or password");
    }
    
} catch (PDOException $e) {
    $response['success'] = false;
    $response['message'] = "Database error: " . $e->getMessage();
} catch (Exception $e) {
    $response['success'] = false;
    $response['message'] = $e->getMessage();
}

// Send response
echo json_encode($response);
?>