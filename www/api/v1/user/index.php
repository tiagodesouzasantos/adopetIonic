<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//ini_set('default_charset', 'UTF-8');
//error_reporting(0);
//ob_start();

require_once $_SERVER["DOCUMENT_ROOT"]. '/api/v1/DBO/Conexao.php';
// Campos NECESSÁRIOS para recuperar os dados do formulário em angular/ionic.
// $postdata = file_get_contents("php://input");
// $request = json_decode($postdata);

$con = new Conexao('adopet');
// $acao = 'gerarString';
// switch ($request->acao) {
// // switch ($acao) {
//     case 'gerarString':
//         echo json_encode(array('te'=>'a'));
//         break;
    
//     default :
//         echo 'Por favor selecione uma ação!';
// }
echo json_encode(array("aaaa"=>"jjjj"));