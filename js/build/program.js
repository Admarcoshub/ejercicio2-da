var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.sumar = function (numeroUno, numeroDos) {
        return numeroUno + numeroDos;
    };
    Calc.prototype.restar = function (numeroUno, numeroDos) {
        return numeroUno - numeroDos;
    };
    Calc.prototype.multiplicar = function (numeroUno, numeroDos) {
        return numeroUno * numeroDos;
    };
    Calc.prototype.dividir = function (numeroUno, numeroDos) {
        return numeroUno / numeroDos;
    };
    return Calc;
}());
/// <reference path="calc.ts" />
/// <reference path="htmlInterfaz.ts" />
var Calculadora = (function () {
    function Calculadora() {
        this.calc = new Calc();
        this.htmlInterfaz = new HtmlInterfaz();
    }
    Calculadora.prototype.sumar = function () {
        this.showTotal(this.calc.sumar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.restar = function () {
        this.showTotal(this.calc.restar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.multiplicar = function () {
        this.showTotal(this.calc.multiplicar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.dividir = function () {
        this.showTotal(this.calc.dividir(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.getNumeroUno = function () {
        return parseFloat(this.htmlInterfaz.getNumeroUnoValue());
    };
    Calculadora.prototype.getNumeroDos = function () {
        return parseFloat(this.htmlInterfaz.getNumeroDosValue());
    };
    Calculadora.prototype.showTotal = function (result) {
        this.htmlInterfaz.renderTotal(result.toString());
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
var HtmlInterfaz = (function () {
    function HtmlInterfaz() {
        this.total = document.getElementById("total");
        this.numeroUno = document.getElementById("numero-uno");
        this.numeroDos = document.getElementById("numero-dos");
    }
    HtmlInterfaz.prototype.getNumeroUnoValue = function () {
        return this.numeroUno.value;
    };
    HtmlInterfaz.prototype.getNumeroDosValue = function () {
        return this.numeroDos.value;
    };
    HtmlInterfaz.prototype.renderTotal = function (total) {
        this.total.innerHTML = total;
    };
    return HtmlInterfaz;
}());
