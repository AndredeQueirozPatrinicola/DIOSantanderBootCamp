// Classes 

// Não existem nativamente no javascrip

// Syntatic sugar; sintaxe para facilitar

class Meal {
    constructor (food) {
        this.food = food
    }


    eat (){
        return '*o* *-* *o*'
    }
}


class Animal {
    constructor(type = "animal"){
        this.type = type
    }
    get type(){
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound(){
        console.log("RWAAAGH")
    }
}

let a = new Animal
console.log(a.type)

class Cat extends Animal {
    constructor(){
        super('cat')
    }

    makeSound(){
        super.makeSound()
        console.log("Meow")
    }
}

let b = new Cat ()
console.log(b.type)