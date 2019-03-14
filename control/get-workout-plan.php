<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 14:35
 */
require_once('../global.php');
$workout = new WorkoutPlan();
$selectedWorkout = $workout->getAllWorkoutPlans();

$output = "                    <table class='table table-striped table-advance table-hover'>
                        <tbody>

<tr>
                            <th><i class='icon_document_alt'></i> Plan's Name</th>
                            <th><i class='icon_info_alt'></i> Description</th>
                            <th><i class='icon_puzzle_alt'></i> Difficulty</th>
                            <th><i class='icon_cogs'></i> Action</th>
                        </tr>";

foreach ($selectedWorkout as $singleWorkout) {
    switch ($singleWorkout['plan_difficulty']) {
        case 1:
            $difficulty = "Beginner";
            break;
        case 2:
            $difficulty = "Intermediate";
            break;
        case 3:
            $difficulty = "Expert";
            break;
        default:
            $difficulty = "Error: Difficulty not found";
            break;
    }
    
    $output .= "<tr id='workout_{$singleWorkout['id']}'>
<td>{$singleWorkout['plan_name']}</td>
<td>{$singleWorkout['plan_description']}</td>
<td>{$difficulty}</td>
<td>
<div class='button-group'>
<a class='btn btn-success' href='/control/edit-workout-plan.php'>
<i class='icon_pencil-edit'></i>
</a>
<button id='deleteBtn_{$singleWorkout['id']}' class='btn btn-danger removeBtn' data-id='{$singleWorkout['id']}'>
<i class='icon_close_alt2'></i>
</button>
</div>
</td>
</tr>";
}

$output .= "</tbody></table>";
echo $output;
