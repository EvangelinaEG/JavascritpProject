$(document).ready(function() {
    $.getJSON("assets/js/class/data.js", function(data){
        let items = [];
        $.each(data, function(index, element){
            servicios.push(element);
        let art = `<article>
                <header>
                    <h2><a href='#'>${element.nombre}</a></h2>
                </header>
                <a href='#' class='image fit'><img src='../../images/${element.imagen}' alt='' /></a>
                <p>${element.descripcion}</p>
                <ul class="actions special">
                    <li><a href="#footer" class="button servicio" id="${element.id}" onclick="solicitar(this)">Solicitar Servicio</a></li>
                </ul>
            </article>`;
            items.push(art);
        })
        $(".posts").append(items);
     });

    $("a").click(function(evento){
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
            $('#msg').html("<b>"+nombre+", en la brevedad nos pondremos en contacto. Gracias!<b>")
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