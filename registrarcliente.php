<?php
require_once 'conexion.php';
$nombre = $_GET['txt_nombre'];
$apellido = $_GET['txt_apellido'];
$ci = $_GET['txt_ci'];
$telefono = $_GET['txt_telefono'];
$correo = $_GET['txt_correo'];
$credencial = $_GET['txt_credencial'];

$upd = "insert into clientes(nombre_cliente,apellido_cliente,ruc_cliente,telefono_cliente,correo_cliente,credencial)values('$nombre','$apellido','$ci','$telefono','$correo','$credencial')";
$ej =mysqli_query($conn,$upd);
if($ej){
 echo "ok";
}else{
    echo "";
}
?>