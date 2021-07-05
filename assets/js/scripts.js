localStorage.clear();
var productos = [];
var nuevo = [];
var servicios = [];

/*FUNCIONES*/
var main = () =>{
        $.ajax({
            method: "GET",
            url:  "./vistas/main.html",
            success: function(respuesta){
                $("#principal").html(respuesta);
            }
        });
    }
const agregar = (id) => {
	var array = servicios.find(ser => ser.id == id);
	var nuevoservicio = new Servicio(array.id, array.nombre, array.precio);
	nuevoservicio.sumarIva();
	var enc = productos.find(ser => ser.id == id);
	if(!enc){
		productos.push(nuevoservicio);
	}
	localStorage.setItem("productos",JSON.stringify(productos));

}

const eliminar = (elem) => {
	var id = $(elem).data("producto");
	var encontrado = productos.indexOf(productos.find(v => parseInt(v.id) == parseInt(id)));
	productos.splice(encontrado, 1);
	localStorage.clear();
		localStorage.setItem("productos",JSON.stringify(productos));
		if(productos.length === 0){
			document.getElementById("card").setAttribute("style", "opacity:0");
		}
		mostrarcarro(productos);
}

const mostrarcarro = (nuevo = null) => {
	var lista = 'Hola, me interesa contratar los siguientes servicios:';
	var total = 0;
	for (var key in nuevo){
	    lista += "\n Limpieza de "+nuevo[key].nombre+"";
	   	total += nuevo[key].precio;
	    }
		$("html,body").animate({scrollTop: $("#footer").offset().top}, 2000);
		var tot = (total > 0)? "\n TOTAL(iva incluido): "+ total : '';
		document.getElementById("message").value = lista+ tot;

}

const solicitar = (elem) => {
        var id = $(elem).attr("id");
        localStorage.clear();
        agregar(id);
        nuevo = JSON.parse( localStorage.getItem("productos"));
        mostrarcarro(nuevo);
}

const cambiar = () => {
    var pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
}
/*FIN FUNCIONES*/




