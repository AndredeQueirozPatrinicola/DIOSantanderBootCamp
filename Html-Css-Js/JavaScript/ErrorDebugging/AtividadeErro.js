
function lancarray(array,num){
    try{
        if (!array && !num) throw new ReferenceError("Parametros não enviados");

        if (typeof array !== 'object') throw new TypeError("Array de tipo errado")

        if (typeof num !== 'number') throw new TypeError("Numero de tipo errado")

        if(array.lenght !== num) throw new RangeError("Tamanho inválido")
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log('tipo de erro não esperado' + e)
        }
    }
}



