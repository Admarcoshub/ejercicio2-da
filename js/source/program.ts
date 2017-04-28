
function sumar () {
	var numero1:number = <HTMLInputElement>document.getElementById('numero-uno').value;
	var numero2:number = <HTMLInputElement>document.getElementById('numero-dos').value;
	var resultado:number = parseInt(numero1) + parseInt(numero2);
	var etiqueta = document.getElementById('total');
	etiqueta.innerHTML = resultado;
}

function restar () {
	var numero1:number = <HTMLInputElement>document.getElementById('numero-uno').value;
	var numero2:number = <HTMLInputElement>document.getElementById('numero-dos').value;
	var resultado:number = parseInt(numero1) - parseInt(numero2);
	var etiqueta = document.getElementById('total');
	etiqueta.innerHTML = resultado;
}

function multiplicar () {
	var numero1:number = <HTMLInputElement>document.getElementById('numero-uno').value;
	var numero2:number = <HTMLInputElement>document.getElementById('numero-dos').value;
	var resultado:number = parseInt(numero1) * parseInt(numero2);
	var etiqueta = document.getElementById('total');
	etiqueta.innerHTML = resultado;
}

function dividir () {
	var numero1:number = <HTMLInputElement>document.getElementById('numero-uno').value;
	var numero2:number = <HTMLInputElement>document.getElementById('numero-dos').value;
	var resultado:number = parseInt(numero1) / parseInt(numero2);
	var etiqueta = document.getElementById('total');
	etiqueta.innerHTML = resultado;
}
