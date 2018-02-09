<?php
class Conexao {

    private $connections = array(
                                // 'adopet'=>array(
                                //     'dns'=>'mysql:host=localhost;dbname=adopet',
                                //     'usernameDB'=>'root',
                                //     'passDB'=>'ogait123'
                                // )
                                'adopet'=>array(
                                    'dns'=>'mysql:host=db4free.net:3307;dbname=adopet',
                                    'usernameDB'=>'adopet',
                                    'passDB'=>'adopet182'
                                )
                            );
    private $conexao;

    function __construct($selectedConection) {
        try {
        	
            $dsn = $this->connections[$selectedConection]['dns'];
            $usernameDB = $this->connections[$selectedConection]['usernameDB'];
            $passDB = $this->connections[$selectedConection]['passDB'];

            $this->conexao = new \PDO($dsn, $usernameDB, $passDB);
            $this->conexao->exec("set names utf8");
            return $this->conexao;
        } catch (\Exception $exc) {
            throw $exc;
        }
    }

    public function executeProcedure(\PDOStatement $statement) {
        try {
            $statement->execute();
            return $statement->fetchAll(\PDO::FETCH_ASSOC);
        } catch (PDOException $exc) {
            throw $exc->getMessage();
        }
    }

    public function executeQuery(\PDOStatement $statement) {
        try {
            $statement->execute();
            return $statement->fetchAll(\PDO::FETCH_ASSOC);
        } catch (PDOException $exc) {
            throw $exc->getMessage();
        }
    }

    public function prepare($query) {
        try {
            return $this->conexao->prepare($query);
        } catch (PDOException $exc) {
            throw $exc->getMessage();
        }
    }

}
