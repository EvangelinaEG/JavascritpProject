class Servicio{
	constructor(id, nombre, precio){
		this.id = id;
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
	}

	sumarIva(){
		this.precio = this.precio * 1.21;
	}

	calculaTotal(descuento, cantidad){
		let desc = (parseInt(descuento) > 0)? descuento : 0;
		let porcen = (parseInt(desc)/100) * (parseInt(this.precio) * cantidad);
		let total = (parseInt(this.precio) * parseInt(cantidad)) - porcen;
		return total;
	}
}