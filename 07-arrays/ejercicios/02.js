let numeros = [1, 2, 3, 4, 5];

function invertirArray(arr) {
    let listaInvertidos = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        listaInvertidos.push(arr[i])
    }

    return listaInvertidos;
}

console.log(invertirArray(numeros))