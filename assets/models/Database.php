<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'techfit_les';
    private $username = 'root';
    private $password = '';
    private $DBConn;

    public function __construct($servidor, $nomeBanco, $usuario, $senha) {
        $this->host = $servidor;
        $this->db_name = $nomeBanco;
        $this->username = $usuario;
        $this->password = $senha;
    }

    public function getConnection() {
        $this->DBConn = null;
        try {
            $this->DBConn = new PDO('mysql:host='.$this->host.';dbname='.$this->db_name, $this->username, $this->password);
            $this->DBConn->exec('set names utf8');
        }
        catch (PDOException $e) {
            echo 'Erro de conexão com o banco de dados: '.$e->getMessage();
        }
        return $this->DBConn;
    }
}