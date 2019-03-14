<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 17:11
 */
require_once('../global.php');
$plan = new WorkoutPlan();
$selectedPlans = $plan->getAllWorkoutPlans();
foreach ($selectedPlans as $selectedPlan) {
    $output .= "<option value={$selectedPlan['id']}>{$selectedPlan['plan_name']}</option>";
}
echo $output;