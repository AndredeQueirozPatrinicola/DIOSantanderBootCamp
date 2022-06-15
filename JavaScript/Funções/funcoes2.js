function exponencial(array, num = 1){
    let result = [];

    for(let i=0; i< array.lenght; i++){
        result.push(array[i] ** num);
    }
    return result;
}

console.log(exponencial([1,2,3,4], 3))

// Objeto arguments 

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.lenght; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

findMax(1,2,3,6,90,1);

function showArgs(){
    return arguments;
}

console.log(showArgs(1,2,4,5,6))

