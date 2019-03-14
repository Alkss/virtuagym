<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/03/19
 * Time: 16:40
 */
require_once('../global.php');
$user = new User();
$selectedUser = $user->getUserById($_POST['id']);
$array = explode(" ", $selectedUser['name'], 2);
$firstName = $array[0];
$lastName = $array[1];
$output = "
                        <div class='panel-body'>
                            <div class='form-group'>
                                <label class='col-sm-2 control-label'>First name</label>
                                <div class='col-sm-10'>
                                <input type='hidden' name='id' value='{$_POST['id']}'/>
                                    <input type='text' name='first-name' class='form-control round-input'
                                           placeholder='Enter first name'
                                           required='required' value='{$firstName}'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <label class='col-sm-2 control-label'>Last name</label>
                                <div class='col-sm-10'>
                                    <input type='text' name='last-name' class='form-control round-input' placeholder='Enter last name'
                                           required='required' value='{$lastName}'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <label class='col-sm-2 control-label'>Email address</label>
                                <div class='col-sm-10'>
                                    <input type='email' name='email' class='form-control round-input' placeholder='Enter email'
                                           required='required' value='{$selectedUser['email']}'>
                                </div>
                            </div>
                        </div>";
echo $output;
