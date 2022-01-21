<?php
require_once 'conexion.php';
$pk = $_GET['idcliente'];
$consul = "select * from pedidos p , productos pr where p.idproducto = pr.idproducto and estado = 'NO CONFIRMADO' and p.idcliente = $pk";
$eje = mysqli_query($conn,$consul);
while($rowPedidos = mysqli_fetch_array($eje)){
?>
<div class="card" style="width:250px">
    <img class="card-img-top" src="../Matias Vera/<?php echo $rowPedidos['img']?>" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title"><?php echo $rowPedidos['idpedido']?></h4>
      <p class="card-text"><?php echo $rowPedidos['descripcion']?> <?php echo "GS. ".number_format($rowPedidos['precio_venta'], 0, ',', '.')?></p>
      <!--a href="#" class="btn btn-info" style="color:white">Detalles</a-->
    </div>
  </div>
  <br>
          <?php
}
?>
<button type="button" class="btn btn-danger" onclick="pedidoscancelado()">Cancelar</button>
<button type="button" class="btn btn-primary" onclick="pedidosconfirmado()">Confirmar</button>