<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 14:35
 */
require_once('../global.php');
$user = new User();
$selectedUser = $user->getAllUsers();
$output = "                    <table class='table table-striped table-advance table-hover'>
                        <tbody>

<tr>
                            <th><i class='icon_profile'></i> Name</th>
                            <th><i class='icon_mail_alt'></i> Email</th>
                            <th><i class='icon_cogs'></i> Action</th>
                        </tr>";

foreach ($selectedUser as $singleUser) {
    $output .= "<tr id='user_{$singleUser['id']}'>
<td>{$singleUser['name']}</td>
<td>{$singleUser['email']}</td>
<td>
<div class='button-group'>
<a class='btn btn-success' href='/update-user.php?id={$singleUser['id']}'>
<i class='icon_pencil-edit'></i>
</a>
<button id='deleteBtn_{$singleUser['id']}' class='btn btn-danger removeBtn' data-id='{$singleUser['id']}'>
<i class='icon_close_alt2'></i>
</button>
</div>
</td>
</tr>";
}

$output .= "</tbody></table>";
echo $output;
