<?php
require_once("mail/PHPMailerAutoload.php");

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "email@gmail.com";
$mail->Password = "password";

$mail->setFrom("email@gmail.com", "Virtuagym");
$mail->addAddress("email@gmail.com");
$mail->Subject = "Your profile has been updated!";
$mail->msgHTML("<html>Your profile has been update!</br>Please check the new information at www.virtuagym.com</html>");
$mail->AltBody = "Your profile has been update!! - Please check the new information at www.virtuagym.com";
$mail->send();
header('location:/user-plan.php');
die();