<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 09/03/19
 * Time: 21:34
 */

require_once ('../global.php');
class Exercise
{
    private $exercise_name;
    
    public function getAllExercises(){
        $db = new DataBase();
        $query = "SELECT * FROM exercise";
        $exercises = $db->getRows($query);
        return $exercises;
    }

}