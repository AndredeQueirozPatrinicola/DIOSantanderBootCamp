// O que é
// Colocar o array em um filtro e somente retornar os itens que satisfazem a condição

// Cria um array novo

/*
array.filter(callback, thisArg)
*/

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']

console.log(frutas.filter((fruta) => fruta.includes('maçã'))) // maçã fuji , maçã verde

