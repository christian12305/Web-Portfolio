<?php

$errors = ”;

$myemail = 'ramoschristian39@gmail.com';

if(empty($_POST['email']) || empty($_POST['email-body']))

{

$errors .= "\n Error: all fields are required";

}


$email_address = $_POST['email'];

$subject = $_POST['subject']

$message = $_POST['email-body'];

if (!preg_match(

"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))

{

$errors .= "\n Error: Invalid email address";

}

if( empty($errors))

{

$to = $myemail;

$email_subject = "$subject";

$email_body = "You have received a new message. ",

" Message: \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);
}
?>