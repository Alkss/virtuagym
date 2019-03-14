<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 14:36
 */
require_once('../global.php');

class User
{
    private $id;
    private $name;
    private $email;
    
    public function getAllUsers()
    {
        $db = new DataBase();
        $query = "SELECT * FROM users";
        $users = $db->getRows($query);
        return $users;
    }
    
    public function getUserById($id)
    {
        $params = [$id];
        $db = new DataBase();
        $query = "SELECT * FROM users WHERE id=?";
        return $db->getRow($query, $params);
    }
    
    public function newUser($name, $mail)
    {
        $params = [$name, $mail];
        $db = new DataBase();
        $query = "INSERT INTO users(`name`,`email`) VALUES(?,?)";
        $newUser = $db->insertRow($query, $params);
        return $newUser;
    }
    
    public function updateUser($name, $mail, $id)
    {
        $params = [$name, $mail, $id];
        $db = new DataBase();
        $query = "UPDATE users SET `name`=? ,email=? WHERE id=?";
        $db->updateRow($query, $params);
    }
    
    public function deleteUser($id)
    {
        $db = new DataBase();
        $query = "DELETE FROM users WHERE id=?";
        $params = [$id];
        $db->deleteRow($query, $params);
    }
    
    public function registerUserAtPlan($userId, $planId)
    {
        $params = [$userId, $planId];
        $db = new DataBase();
        $query = "INSERT INTO user_plan(user_id, plan_id) VALUES(?,?)";
        return $db->insertRow($query, $params);
    }
}
