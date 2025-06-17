// let numeros = [15, 10, -3];

// console.log(numeros.sort());
// console.log(numeros.reverse());


// let letras = ["z", "a", "m"];
// console.log(letras.sort());
// console.log(letras.reverse());

// let conMayusculas = ["Z", "a", "m"]
// conMayusculas.sort((a, b) => {
//     /**
//      * a antes b => -1
//      * b antes a => 1
//      * si son iguales => 0
//      */
//     let aLower = a.toLowerCase();
//     let bLower = b.toLowerCase();

//     if (aLower < bLower) {
//         return -1;
//     }

//     if (aLower > bLower) {
//         return 1
//     }
//     return 0;
// });

// console.log(conMayusculas);


let usuarios = [
    {edad: 15, nombre: "Felipe"},
    {edad: 16, nombre: "Martin"},
    {edad: 12, nombre: "Gaston"},
]

usuarios.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
})

console.log(usuarios);