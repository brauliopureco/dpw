<?php 

function conectar(){
    $host = "localhost";
    $user= "root";
    $pass="123456789";
    $db="iceppracticas";
    //hacemos la conexion
    $conn = new mysqli($host,$user,$pass,$db);
    //validamos conexion
    if($conn->connect_error){
        die("conexion fallida". $conn->connect_error);
    }
    return $conn;
    //fin de la fucion de conexion


}

?>