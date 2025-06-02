let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function toPairs(arr){

    let nuevoArr = [];

    for (idx in arr) {
        let elemento = arr[idx];
        nuevoArr[idx] = [elemento.id, elemento];
    }

    return nuevoArr;
}

let resultado = toPairs(array);
console.log(resultado);