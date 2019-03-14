<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 16:22
 */
require_once('../global.php');
$user = new User();

var_dump($_POST);

$name = $_POST['first-name'] . " " . $_POST['last-name'];
$user->updateUser($name, $_POST['email'], $_POST['id']);
header('location:/user-list.php');
die();
