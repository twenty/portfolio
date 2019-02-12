<?php
function checkValidity($field) {
	return (isset($field)&&!empty($field));
}

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

if(checkValidity($name) && checkValidity($email) && checkValidity($message)) {
	// do mail
	$to      = 'hello@cralvarez.com,christapher.alvarez93@gmail.com';
	$subject = (checkValidity($subject)?$subject:"Someone submit the form on your portfolio!");
	$headers = 'From: '.$email.'' . "\r\n" .
	    'Reply-To: '.$email . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	print json_encode(array(
		"success"	=> true
	));
} else {
	print json_encode(array(
		"success"	=> false,
		"message"	=> "Name, Email and Message must all be provided!"
	));
}