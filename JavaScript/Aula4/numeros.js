function numerosRecebe(num1, num2){
    if (num1 === num2){
        console.log("Os numeros são iguais")
    }else{
        console.log("Os numeros são diferentes")
    }
    soma = num1 + num2
    console.log("A soma dos números é ", soma)
    if(soma > 10){
        console.log("A soma é maior que 10")
    }else{
        console.log("A soma não é maior que 10")
    }
    if(soma < 20){
        console.log("A soma é menor que 20")
    }else{
        console.log("A soma não é menor que 20")
    }
}

numerosRecebe(10,10)


