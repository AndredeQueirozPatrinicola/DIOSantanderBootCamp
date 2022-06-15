// if else

function numeroPositivo(num){
    let resultado;

    if (num < 0){
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2) // True
numeroPositivo(-9) // False

function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorDez = num > 10;

    if(ehNegativo){
        console.log("É Negtivo");
    }else if(!ehNegativo && maiorDez){
        console.log("É positivo e maior que d10");
    }

    console.log("É positivo");
}

// Switch

function getanimal(id) {
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "que"
    }
  }

  console.log(getanimal(1))
  console.log(getanimal(3))
  console.log(getanimal(4))