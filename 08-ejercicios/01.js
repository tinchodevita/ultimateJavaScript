function paraAbsoluto(arr) {
    return arr.map(n => Math.abs(n))
}

const numeros = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(numeros);

console.log(absolutos);