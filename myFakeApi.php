<?php

// $myTable = [['elementA' => 'A','elementB' => 'B']];
//$myTable = ["a"=>"A", "b"=>"B"];
// $myTable = ['A', 'B'];
//$message = "coucou";

$test = [{"id":"5","name":"everyone fav","flavor":"pralines","user_id":"1"},{"id":"16","name":"nestle queensss","flavor":"nestle chocolat","user_id":"1"},{"id":"22","name":"tarty b","flavor":"tarte of user b","user_id":"2"}];

header('Access-Control-Allow-Origin: *');

// echo json_encode($message);
echo  json_encode($test);