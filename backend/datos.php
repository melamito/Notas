<?php


header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

$json=file_get_contents('php://input');
$data=json_decode($json);

$archivo= fopen("datos.json","w");
fwrite($archivo,$json);

var_dump($data);

$variable= "ok";
echo json_encode($variable);




?>
