class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor
    }

    sacar(valor){
        if(valor > this.saldo){
            return console.log("Saldo insuficiente")
        }else{
        this._saldo = this._saldo - valor;
        return console.log(`Você sacou R$ ${valor}`);
        }
    }
    depositar(value){
        this._saldo = this._saldo + value;
        return console.log(`Você depositou R$ ${value}`);
    }
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

