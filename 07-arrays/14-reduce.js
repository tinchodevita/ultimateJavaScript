const numeros = [1, 2, 3, 4];

// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0);

// console.log(suma);

// let anidado = [[1, 2], 3, [4, 5]];
// //[1, 2, 3, 4, 5]
// const plano = anidado
//     .reduce((acumulador, elemento) => acumulador.concat(elemento), [])

// console.log(plano);

//buscar en arrays muy extremandamente grandes
const usuarios = [
    {edad: 17, nombre: "Nico"},
    {edad: 13, nombre: "Martin"},
    {edad: 18, nombre: "Felipe"},
    {edad: 19, nombre: "Matias"},
];

const  indexado = usuarios.reduce((acumulador, elemento) => ({
    ...acumulador,
    [elemento.nombre]: elemento,
}), {})

console.log(indexado)