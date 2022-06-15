const myMap = new Map()

myMap.set("Andre", "TI")
myMap.set("Carlos", "Admin")
myMap.set("Sergio", "Admin")
myMap.set("Manoel", "Zelador")
myMap.set("Bruno", "Capitão")



function getAdmin(map){
    let admins = [];

    for([key, value] of map){
        if(value === "Admin"){
            admins.push(key);
        }

    }

    return admins;
}

console.log(getAdmin(myMap));