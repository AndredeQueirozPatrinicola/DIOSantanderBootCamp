// Assincrino

// Promises

// Objeto de processamento assincrono
// Inicialmente seu valor é desconhecido
// A promessa pode ser resolvida ou rejeitada

/*

- Pending
- Fullfilled
- Rejected

*/

// Estrutura

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);
});

// Manipulação

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
    .catch((err) => console.log(err.message))


async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve("Resolvida");
        })
    })
  

const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message))

return resolved

}