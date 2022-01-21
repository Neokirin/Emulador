<?php
 require_once 'conexion.php';
 $pk = $_GET['idcliente'];
 $consulta = "select count(*) from pedidos where estado ='NO CONFIRMADO' and idcliente ='$pk'";
 $eje = mysqli_query($conn, $consulta);
 $cantidad = mysqli_fetch_array($eje);

 if($cantidad[0] > 0){
     echo $cantidad[0];
 }else{
     echo "";
 }
?>