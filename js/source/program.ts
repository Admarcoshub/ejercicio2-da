class Calc{
	constructor(){
	}

	public sumar(numeroUno: number, numeroDos: number):number{
		return numeroUno+numeroDos;
	}
	public restar(numeroUno: number, numeroDos: number):number{
		return numeroUno-numeroDos;
	}
	public multiplicar(numeroUno: number, numeroDos: number):number{
		return numeroUno*numeroDos;
	}
	public dividir(numeroUno: number, numeroDos: number):number{
		return numeroUno/numeroDos;
	}

}

/// <reference path="calc.ts" />
/// <reference path="htmlInterfaz.ts" />

class Calculadora{
	calc: Calc;
	htmlInterfaz: HtmlInterfaz;

	constructor(){
		this.calc = new Calc();
		this.htmlInterfaz = new HtmlInterfaz();
	}

	public sumar(){
		this.showTotal(this.calc.sumar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public restar(){
		this.showTotal(this.calc.restar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public multiplicar(){
		this.showTotal(this.calc.multiplicar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public dividir(){
		this.showTotal(this.calc.dividir(this.getNumeroUno(),this.getNumeroDos()));
	}

	private getNumeroUno(){
		return parseFloat(this.htmlInterfaz.getNumeroUnoValue());
	}

	private getNumeroDos(){
		return parseFloat(this.htmlInterfaz.getNumeroDosValue());
	}

	private showTotal(result: number){
		this.htmlInterfaz.renderTotal(result.toString());
	}

}

var calculadora = new Calculadora();


class HtmlInterfaz{
	total: HTMLInputElement;
	numeroUno: HTMLInputElement;
	numeroDos: HTMLInputElement;
	constructor(){
		this.total = <HTMLInputElement>document.getElementById("total");
		this.numeroUno = <HTMLInputElement>document.getElementById("numero-uno");
		this.numeroDos = <HTMLInputElement>document.getElementById("numero-dos");
	}
	public getNumeroUnoValue():string{
		return this.numeroUno.value;
	}
	public getNumeroDosValue():string{
		return this.numeroDos.value;
	}
	public renderTotal(total: string){
		this.total.innerHTML = total;
	}
}
