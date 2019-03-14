<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 15:30
 */
require_once('../global.php');

class WorkoutPlan
{
    private $name;
    private $description;
    private $difficulty;
    
    public function getAllWorkoutPlans()
    {
        $db = new DataBase();
        $query = "SELECT * FROM plan";
        return $db->getRows($query);
    }
    
    
    
    public function deleteWorkoutPlan($id)
    {
        $params = [$id];
        $db = new DataBase();
        $query = "DELETE FROM plan WHERE id=?";
        $db->deleteRow($query, $params);
    }
    
}