let pairs = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Martin'}],
    [3, {name: 'Mateo'}],
]

function toCollection(arr) {

    let nuevaColeccion = [];

    for (i in arr) {
        let elemento = arr[i];
        nuevaColeccion[i] = elemento[1];
        nuevaColeccion[i].id = elemento[0];
    }

    return nuevaColeccion;
}

let resultado = toCollection(pairs);
console.log(resultado);