// O que é?
// Conexao de arrays, funcao(matematica)
// Cria um novo array/Nao modifica o original
// Realiza as operações em ordem(0,1,2,3,...)
/*
array.map(callback, thisArg);

callback(item, index, array)
*/
// thisArg é opcional

//  Map vs forEach

// Map

const array = [1,2,3,4,5];

console.log(array.map((item) => item * 2)); // [2,4,6,8,10]

// ForEach

const array1 = [1,2,3,4,5];

console.log(array.forEach((item) => item * 2)); // undefined

// Valor de retorno
// considerar um array auxiliar para continuar