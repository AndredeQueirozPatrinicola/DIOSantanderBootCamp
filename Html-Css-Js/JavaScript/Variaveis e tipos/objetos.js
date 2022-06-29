let obj = {};

obj.name = "julia"

console.log(obj);

obj.idade = 21;

console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

let person = {
    name: "André",
    age : 21,
    adress : "Rua 2"
};


person["numberOfSiblings"] = 3

console.log(person)

let mom = "nameOfMom"

person[mom] = "Nora"

console.log(person);