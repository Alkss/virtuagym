<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 17:34
 */
require_once('../global.php');
$user = new User();
$user->registerUserAtPlan($_POST['selectUser'], $_POST['selectPlan']);
header('location:/user-plan.php');
die();
