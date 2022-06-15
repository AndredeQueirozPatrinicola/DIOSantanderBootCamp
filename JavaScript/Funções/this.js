// This

const pessoa = {
    firstName : "André",
    lastName: "Souza",
    id : 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.fullName());
console.log(pessoa.getId());


const pessoa1 = {
    nome: 'Miguel',
};

const animal = {
    nome: "André",
}

function getSomething(){
    console.log(this.nome);
}

getSomething.call(animal)

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 +this.num2 + a + b);
}

soma.call(myObj,1,5);

getSomething.apply([animal])

// bind

const retornaNomes = function () {
    return this.nome;
  };

  let bruno = retornaNomes.bind({nome: "Bruno"});

  console.log(bruno());