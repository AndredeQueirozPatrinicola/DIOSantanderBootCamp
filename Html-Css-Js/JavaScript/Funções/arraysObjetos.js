// Spread

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1,2,3]

console.log(sum(...numbers))

// Rest

function confereTamanho(...args){
    console.log(args.length);
}

confereTamanho(1,2,4,6);

// Object destructuring 

const user = {
    id: 42,
    displayName: 'Dé',
    fullName: {
        firstName: "André",
        lastName: "Souza"
    }
};

function userId({id}){
    return id
}

function getFullname({fullName: {firstName: first, lastName: last}}) {  
    return `${first} ${last}`
}

console.log(userId(user));

console.log(getFullname(user));

