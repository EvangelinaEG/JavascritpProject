$(document).ready(function() {

    //carga de servicios
    $.getJSON("assets/js/class/data.js", function(data){
        $(".posts").html("");
        let items = [];
        $.each(data, function(index, element){
            servicios.push(element);
        let art = `<article>
                <header>
                    <h2><a href='#'>${element.nombre}</a></h2>
                </header>
                <a href='#' class='image fit'><img src='../assets/images/${element.imagen}' alt='' /></a>
                <p>${element.descripcion}</p>
                <ul class="actions special">
                    <li><a href="#footer" class="button servicio" id="${element.id}" onclick="solicitar(this)">Solicitar Servicio</a></li>
                </ul>
            </article>`;
            items.push(art);
        })
        $(".posts").append(items);
     });

    //carga de seccion trabaja con nosotros

    $("#trabaja").click(function(){
        $.ajax({
            method: "GET",
            url:  "./vistas/workwithus.html",
            success: function(respuesta){
                $("#principal").html(respuesta);
            }
        });

    });

    //carga de la sección principal

    $("#index").click(function(){
       main();
    });


    $("a").click(function(evento){
        $('.links li').removeClass('active');
        $(this).parent().addClass('active');
        if($(this).attr("href").charAt(0) == "#"){
            evento.preventDefault();
            var codigo = $(this).attr("href");
            $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
        }
    });

    $("#submit").click(function(evento){
        evento.preventDefault();
        let nombre = ($("input[name=name]").val())? $("input[name=name]").val() : null;
        let email = ($("input[name=email]").val())? $("input[name=email]").val() : null;
        let mensaje = ( $("#message").val())? $("#message").val() : null;
        if(nombre == null || email == null || mensaje == null)
        {
            $('#msg').html("<b>Todos los campos son obligatorios<b>")
        }else if(email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
            $('#msg').html("<b>El correo electronico debe ser correcto<b>");
        }else{
            $("#form")[0].reset();
            swal(nombre+", Gracias por su mensaje!. En breve nos pondremos en contacto.");
        }
    })

    $("#enviar").click(function(evento){
        evento.preventDefault();
       var datos = $('#formTrab').serializeArray();
       error = '';
       $(datos).each(function (index, value) {
           if(value.value == ''){
                error += `El ${value.name} es obligatorio<br>`;
           }
       })

        if(error == '')
        {
            $("#form")[0].reset();
            swal("Gracias por su interes en trabajar con nosotros!. En breve nos pondremos en contacto.");
        }else{

            $('#msj').html(error);
        }
    })

    $("input").focus(function() {
        $('#msg').html("");
    });

    $("#conocenos").click(function(evento){
        evento.preventDefault();
        $("#nosotros").toggle("slow");
    })

    $('.limpiar').click(function(e){
        productos = [];
        localStorage.clear();
        document.getElementById("card").setAttribute("style", "opacity:0");
        for ( i = 0; i < document.form.elements.length ; i++)
          if(document.form.elements[i].type == "checkbox")
             document.form.elements[i].checked = 0
    });

});