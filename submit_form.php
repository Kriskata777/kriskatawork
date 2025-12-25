<?php
header('Content-Type: text/plain');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill in all fields");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Please enter a valid email address");
    }

    $to = 'kristiqngeorgiev2021@abv.bg';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>