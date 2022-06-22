// Throw, Return e Finaly

// Throw:

function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join;
}
// Retorna string 


function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join;
}
// Retorna erro com propriedades


//Try...Catch

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
}

// retorna um log do console informando a string invalida

// Finally 

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log("A string enviada foi: " + string)
    }
}