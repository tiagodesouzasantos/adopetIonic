<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include_once '../DBO/model/SQLTransactions.php';

class sqlMetodos {

    function __construct() {

    }

	public function sqlRunSPBindingParams(Conexao $con, $data) {

    	$sqlRun = new SQLTransactions();
		$result = $sqlRun->runSPBindingParams($data->storedprocedure,$data->param,$con);

		$retorno['rows'] = ($result);
		
		return json_encode($retorno);
    }
}
