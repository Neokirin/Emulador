<?php
require_once 'conexion.php';
$consulta =  "Select * from productos";
$ejecutar = mysqli_query($conn, $consulta);
?>

<?php
$i=1;
while ($rows = mysqli_fetch_array($ejecutar)) {
    ?>
    <div class="card" style="width:250px">
    <img class="card-img-top" src="../Matias Vera/<?php echo $rows['img']?>" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title"><?php echo $rows['titulo']?></h4>
      <input type="hidden" id="idproducto<?php echo $i;?>" name="idproducto" value="<?php echo $rows['idproducto'];?>">
      <input type="hidden" id="precio<?php echo $i;?>" name="precio" value="<?php echo $rows['precio_venta'];?>">
      <p class="card-text"><?php echo $rows['descripcion']?> <?php echo "GS. ".number_format($rows['precio_venta'], 0, ',', '.')?></p>
      <a href="#" class="btn btn-info" style="color:white">Detalles</a>
      <button class="btn btn-secondary" style="color:white" onclick="enviopedidos(document.getElementById('idcliente').value, document.getElementById('idproducto<?php echo $i;?>').value, document.getElementById('precio<?php echo $i;?>').value)"><span class="fa fa-shopping-cart" aria-hidden="true"></span></button>
    </div>
  </div>
  <br>
  <?php
$i++;
}
?>
  