<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the POST data
    $email = trim($_POST['email']);
    
    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email is valid, now save it
        // Option 1: Store email in a text file (simple approach)
        file_put_contents('subscribers.txt', $email . PHP_EOL, FILE_APPEND);

        // Option 2: Store email in a database (if you want to set up a database)
        /*
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "your_database";

        // Create a connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO subscribers (email) VALUES ('$email')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
        */
        
        // Send a response to the user
        echo "Thank you for subscribing! We have received your email: $email";
    } else {
        // Invalid email address
        echo "Please enter a valid email address.";
    }
} else {
    // If the request method is not POST, show the form (this shouldn't happen in this case)
    echo "Invalid request method.";
}
?>
