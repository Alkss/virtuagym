<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 17:11
 */
require_once('../global.php');
$user = new User();
$selectedUsers = $user->getAllUsers();
foreach ($selectedUsers as $selectedUser) {
    $output .= "<option value={$selectedUser['id']}>{$selectedUser['name']}</option>";
}
echo $output;