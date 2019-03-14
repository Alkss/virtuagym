<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 14:59
 */
require_once('../global.php');
$workout = new WorkoutPlan();
$id = $_POST['id'];

$workout->deleteWorkoutPlan($id);
