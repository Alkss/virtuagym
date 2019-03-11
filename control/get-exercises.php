<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 09/03/19
 * Time: 21:32
 */
require_once('../global.php');
$ex = new Exercise();
$exercises = $ex->getAllExercises();
foreach ($exercises as $exercise) {
    $output .= "<option value='{$exercise['id']}'>{$exercise['exercise_name']}</option>";
}
echo $output;