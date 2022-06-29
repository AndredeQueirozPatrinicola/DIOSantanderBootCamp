function somaNumeros(array){
    return array.reduce(function(prev, current){
        return prev + current;
    })
}

const arr = [12,25,34];

console.log(somaNumeros(arr));


const lista = [
    {
        name: "Sabão em pó",
        preco: 30
    },
    {
        name: "Cereal",
        preco: 12
    },
    {
        name: "Totalha",
        preco: 30
    }
];

const saldoDisponível = 100;

function calculaSaldo(saldoDisponível, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponível)
  }

  console.log(calculaSaldo(saldoDisponível, lista));