// SET

// set != array

// somente valores UNICOS, nao se repetem

// metodos diferentes

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1); // True

mySet.has(3); // False

mySet.delete(5);
mySet.add(5);

console.log(mySet);

// Sets vs Arrays 
// Em vez da propriedade length, o numero de valores é identificado por size
// nao possui varios outros metodos que o array possui, array é mais flexível