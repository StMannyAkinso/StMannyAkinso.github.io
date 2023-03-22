<?php
// Set the recipient email address here
$to = "sample@example.com";

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$budget = $_POST['budget'];
$comments = $_POST['comments'];

// Build the email subject and message
$subject = "New form submission from " . $name;
$message = "Name: " . $name . "\n\n";
$message .= "Email: " . $email . "\n\n";
$message .= "Phone Number: " . $number . "\n\n";
$message .= "Budget: £" . $budget . "\n\n";
$message .= "Comments:\n" . $comments;

// Send the email
$headers = "From: " . $email;
if (mail($to, $subject, $message, $headers)) {
  echo "Email sent successfully.";
} else {
  echo "Error: Email sending failed.";
}
?>