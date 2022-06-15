// for in

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2,33,456,356,40];

//console.log(multiplicaPorDois(meusNumeros));

// For...in

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}
function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto= {
    nome: "André",
    idade: "21",
    cidade: "São Paulo"
}

forInExemplo(meuObjeto);
forInExemplo2(meuObjeto);

// for of

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra);

// while.. do while

function exemplo() {
    let num = 0
    
    while(num <= 5){
        console.log(num);
        num ++;
    }
  }

exemplo()

// do while

function exemploDoWhile(){
    let num = 6;

    do {
        console.log(num);
        num ++;
    } while(num <= 5){
        console.log("fim")
    }
}

exemploDoWhile();