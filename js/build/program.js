function sumar() {
    var numero1 = document.getElementById('numero-uno').value;
    var numero2 = document.getElementById('numero-dos').value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    var etiqueta = document.getElementById('total');
    etiqueta.innerHTML = resultado;
}
function restar() {
    var numero1 = document.getElementById('numero-uno').value;
    var numero2 = document.getElementById('numero-dos').value;
    var resultado = parseInt(numero1) - parseInt(numero2);
    var etiqueta = document.getElementById('total');
    etiqueta.innerHTML = resultado;
}
function multiplicar() {
    var numero1 = document.getElementById('numero-uno').value;
    var numero2 = document.getElementById('numero-dos').value;
    var resultado = parseInt(numero1) * parseInt(numero2);
    var etiqueta = document.getElementById('total');
    etiqueta.innerHTML = resultado;
}
function dividir() {
    var numero1 = document.getElementById('numero-uno').value;
    var numero2 = document.getElementById('numero-dos').value;
    var resultado = parseInt(numero1) / parseInt(numero2);
    var etiqueta = document.getElementById('total');
    etiqueta.innerHTML = resultado;
}
