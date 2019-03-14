<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 14:59
 */
require_once('../global.php');
$user = new User;
$id = $_POST['id'];

$user->deleteUser($id);
