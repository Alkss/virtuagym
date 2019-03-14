<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 09/03/19
 * Time: 21:00
 */
require_once('../global.php');
$user = new User;

$name = $_POST['first-name'] . " " . $_POST['last-name'];
$newUserId = $user->newUser($name, $_POST['email']);
header('location:/control/send-mail.php');
die();
