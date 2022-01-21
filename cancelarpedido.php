<?php
require_once 'conexion.php';
$upd = "update pedidos set estado ='CANCELADO' where estado = 'NO CONFIRMADO'";
$ej =mysqli_query($conn,$upd);
if($ej){
 echo "ok";
}else{
    echo "";
}
?>