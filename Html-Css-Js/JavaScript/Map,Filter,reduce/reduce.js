// O que é?
/*
Execute uma função em todos os elementos do array e retorna um valor unico

array.reduce(callbackFn, initialValue)

callback: Função a ser executada a partir do acumulador
InitiValue: valor sobre o qual o retorno final irá atuar

*/

const callbackFn = function (accumulator, currentValue, index, array) {
    // do something
}

array.reduce(callbackFn, initiValue)