function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'Juliana',
    idade: 21
};

const pessoa1 = {
    nome: "André",
    idade: 76
}

console.log(calculaIdade.call(pessoa, 40));
console.log(calculaIdade.apply(pessoa1, [24]));