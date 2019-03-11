<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 04/02/19
 * Time: 03:30
 */
session_start();
spl_autoload_register("load_class");

function load_class($class_name)
{
    require_once("class/" . $class_name . ".php");
}


ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

setlocale(LC_ALL, 'pt_BR','pt_BR.utf-8','pt_BR.utf-8','portuguese');
date_default_timezone_set('America/Sao_Paulo');