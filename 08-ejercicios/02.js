const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15},
    ['lala']
];
// console.log(typeof(miArray))

function dividePorTipo(arr) {
    return { 
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(s => typeof s === "string"),
        objets: arr.filter(o => typeof o === "object"),
    }
};

const nuevoArray = dividePorTipo(miArray);

console.log(nuevoArray);