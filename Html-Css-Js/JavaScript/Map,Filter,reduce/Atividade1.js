const maça = {
    value: 2
}

const laranja = {
    value: 3
}

function mapThis(array, thisArg){
    return array.map(function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1,2,3];

console.log("This -> Maçã", mapThis(nums, maça));

console.log("This -> Laranja", mapThis(nums, laranja));



function mapNoThis(arr){
    return arr.map(function(item){
        return item * 2;
    })
}

const numeros = [4,56,74,12];

console.log(mapNoThis(numeros))