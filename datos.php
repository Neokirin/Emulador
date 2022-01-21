<?php
require_once 'conexion.php';
$consulta = "select * from clientes where correo_cliente ='$_GET[txt_user]' and credencial ='$_GET[txt_pass]'";

$ejecutar = mysqli_query($conn, $consulta);
if (mysqli_num_rows($ejecutar)>0) {
    $rows = mysqli_fetch_array($ejecutar);
    $user = $rows['correo_cliente'];
    $pass = $rows['credencial'];
    $pk = $rows['id'];
    //echo $user.',',$pk;
    echo $pk;
} else {
    echo "hubo problemas al recuperar los datos";
}

?>