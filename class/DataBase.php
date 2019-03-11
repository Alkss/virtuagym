<?php

class Database
{

    public $isConnected;
    protected $datab;

    //connect to db
    public function __construct($server = 'localhost', $user = 'root', $password = 'root', $dbname = 'virtuagym')
    {
        $this->isConnected = true;
        try {
            $this->datab = new PDO("mysql:host={$server};dbname={$dbname};", $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->datab->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new exception($e->getMessage());
        }
    }

    //disconnect from db
    public function disconnect()
    {
        $this->isConnected = false;
        $this->datab = null;
    }

    //get row
    public function getRow($query, $params = [])
    {
        try {
            $stmt = $this->datab->prepare($query);
            $stmt->execute($params);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
            return $res;
        } catch (PDOException $e) {
            throw new exception($e->getMessage());
        }
    }

    //get row
    public function getCount($query, $params = [])
    {
        try {
            $stmt = $this->datab->prepare($query);
            $stmt->execute($params);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
            return reset($res);
        } catch (PDOException $e) {
            throw new exception($e->getMessage());
        }
    }

    //get rows
    public function getRows($query, $params = [])
    {
        try {
            $stmt = $this->datab->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new exception($e->getMessage());
        }
    }

    //insert row
    public function insertRow($query, $params = [])
    {
        try {
            $stmt = $this->datab->prepare($query);
            $stmt->execute($params);
            return $this->datab->lastInsertId();
        } catch (PDOException $e) {
            throw new exception($e->getMessage());
        }
    }

    //update row
    public function updateRow($query, $params = [])
    {
        $this->insertRow($query, $params);
    }

    //delete row
    public function deleteRow($query, $params = [])
    {
        $this->insertRow($query, $params);
    }

}


