 <?php 
 require_once 'conexion.php';
 $cliente = $_GET['idcliente'];
 $fecha = date('Y/m/d');
 $producto = $_GET['idproducto'];
 $cantidad = 1;
 $precio = $_GET['precio'];
 $estado = "NO CONFIRMADO";
$ins = "insert into pedidos (idcliente,fecha,idproducto,cantidad,precio,estado) values 
($cliente,'$fecha',$producto,$cantidad,$precio,'$estado')";

$eje = mysqli_query($conn, $ins);

if ($eje) {
    echo "Pedido agregado";
}else{

}

 ?>