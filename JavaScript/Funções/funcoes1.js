function nome(parametros){
    // instruções
    return; // valor retorno
}

// função anônima

const soma = function(a,b){
    return a+b;
}



// Função autoinvocável 
/*
(
    function(a,b){
        return a + b;
    }
)();
*/
//Call back

const calc = function(operacao, num1,num2){
    return operacao(num1,num2);
}

const sum = function (num1, num2) {
    return num1 + num2;
  }

const sub = function (num1, num2) {
    return num1 - num2;
  }

const resultSoma = calc(sum,1,2);
const resultSub = calc(sub, 1,2)

console.log(resultSub);
console.log(resultSoma);