$(document).ready(function () {
    /*$("#formulario_login").on("submit", function (e){
    var form = document.getElementById("formulario_login");
    $.ajax({
        url: 'datos.php ',
        type: 'post',
        data: new FormData(form),
        contentType: false,
        processData: false,
        success: function(response) {
            if(response == true){
                $("#mensaje").html("Datos correctos, redireccionando...");
                localStorage.variableUser = document.getElementById("#txt_user"); 
                setTimeout("location.href='menu.html'",3000);
            }else{
                $("#mensaje").html(response);
            }
            
        }
    });
    return false;
    });*/

    $("#btn_acceder").click(function () {
        var txt_user = $("#txt_user").val();
        var txt_pass = $("#txt_pass").val();

        if (txt_user == "" && txt_pass == "") {
            $("#mensaje").html("Completar los campos");
            $("#mensaje").fadeOut(3000);
            $("#mensaje").fadeShow(1000);
        } else {
            $.get("datos.php", { txt_user: txt_user, txt_pass: txt_pass }, function (respuesta) {
                $("#mensaje").html(respuesta);
                if (respuesta > 0) {
                    $("#mensaje").html("Datos correctos, redireccionando...");
                    localStorage.variableUser = txt_user;
                    localStorage.idusuario = respuesta;
                    setTimeout("location.href='menu.html'", 3000);
                } else {
                    $("#mensaje").html(respuesta);
                }
            });
        }
    });
});

$(document).ready(function () {
    $("#btn_registrarse").click(function () {
        $("#formulario_login").fadeOut(1000);
        $("#formulario_registro").show(1000);
    });
});

$(document).ready(function () {
    $("#btn_registrarse_guardar").click(function () {

        var txt_nombre = $("#nombre").val();
        var txt_apellido = $("#apellido").val();
        var txt_ci = $("#ci").val();
        var txt_telefono = $("#telefono").val();
        var txt_correo = $("#correo").val();
        var txt_credencial = $("#credencial").val();

        if (txt_nombre == "" && txt_apellido == "" && txt_ci == "" && txt_telefono == "" && txt_correo == "" && txt_credencial == "") {
            $("#mensaje2").html("Completar los campos");
            $("#mensaje2").fadeOut(3000);
            //$("#mensaje").fadeShow(1000);
        } else {
            $.get("registrarcliente.php", { txt_nombre: txt_nombre, txt_apellido: txt_apellido, txt_ci: txt_ci, txt_telefono: txt_telefono, txt_correo: txt_correo, txt_credencial: txt_credencial }, function (respuesta) {
                $("#mensaje2").html(respuesta);
                if (respuesta !="") {
                    $("#mensaje2").html("Datos registrados correctamente");
                    $("#formulario_registro").fadeOut(1000);
                    $("#formulario_login").show(1000);
                } else {
                    $("#mensaje2").html('registro incorrecto');
                }
            });
        }
    });
});



$(function () {
    $("#mostrarproductos").load('mostrarart.php');
    $("#carrito").load('countcarrito.php?idcliente='+localStorage.idusuario);
    $("#detallespedidos").load('detallespedidos.php?idcliente='+localStorage.idusuario);
    $("#historialpedido").load('historialpedido.php?idcliente='+localStorage.idusuario);

});

function salir() {
    localStorage.clear();
    location.href = 'inicio.html';
}

function mostrarpedidos() {
    $("#mostrarproductos").fadeOut(1000);
    $("#historialpedido").fadeOut(1000);
    $("#detallespedidos").show(3000);
    $("#detallespedidos").load('detallespedidos.php?idcliente='+localStorage.idusuario);
}

function mostrarmenu() {
    $("#detallespedidos").fadeOut(1000);
    $("#historialpedido").fadeOut(1000);
    $("#mostrarproductos").show(1000);

}

function pedidoscancelado() {
    $.get("cancelarpedido.php", {}, function (respuesta) {
        //$("#mensaje").html(respuesta);
        if (respuesta != "") {
            alert('Pedidos cancelados');
            $("#detallespedidos").fadeOut(1000);
            $("#mostrarproductos").show(3000);
            $("#carrito").load('countcarrito.php?idcliente='+localStorage.idusuario);
        } else {
            alert('Fallo en la cancelacion del pedido');
            //$("#mensaje").html(respuesta);
        }
    });
}

function pedidosconfirmado() {
    $.get("confirmarpedido.php", {}, function (respuesta) {
        //$("#mensaje").html(respuesta);
        if (respuesta != "") {
            alert('Pedidos confirmados');
            $("#detallespedidos").fadeOut(1000);
            $("#mostrarproductos").show(3000);
            $("#carrito").load('countcarrito.php?idcliente='+localStorage.idusuario);
        } else {
            alert('Fallo en la confirmacion del pedido');
            //$("#mensaje").html(respuesta);
        }
    });
}
/*$("#salir").click(function(){
    localStorage.clear();
    location.href = 'inicio.html';  
    });

    /*function salir(){
        localStorage.clear();
    location.href = 'inicio.html'; 
    }*/


function enviopedidos(a, b, c) {
    /* alert(a);
     alert(b);
     alert(c);*/

    var idcliente = a;
    var idproducto = b;
    var precio = c;
    $.get("pedido.php", { idcliente: idcliente, idproducto: idproducto, precio: precio }, function (respuesta) {
        $("#mensaje").html(respuesta);
        if (respuesta != "") {
            $("#carrito").load('countcarrito.php?idcliente='+localStorage.idusuario);
        } else {
            $("#mensaje").html('Fallo en el pedido');
        }
    });
}
function mostrarhistorial() {
    $("#mostrarproductos").fadeOut(1000);
    $("#detallespedidos").fadeOut(1000);
    $("#historialpedido").show(3000);
    $("#historialpedido").load('historialpedido.php?idcliente='+localStorage.idusuario);
}
