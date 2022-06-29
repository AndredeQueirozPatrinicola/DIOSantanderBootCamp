// Filter
// Filtre e retorne todos os números pares de um array.

function filtraPares(array){
    return array.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
  }

const meuArray = [1,45,64,23,15,34,22];

console.log(filtraPares(meuArray));