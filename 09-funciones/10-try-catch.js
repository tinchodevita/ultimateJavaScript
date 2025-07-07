function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Error: el parámetro no es un array');
    }
    return arr.reduce((acc, ele) =>{
        if (typeof ele !== "number" || Number.isNaN(ele)) {
            throw new Error (`Error: Elemento ${ele} no es un número.`)
        }
        return acc + ele;
    });
}

// console.log(sumaTodo([1, 2, 3, 4]));
try {
    console.log(sumaTodo([1, 2, 3, 4]));
} catch (e) {
    console.log(e.message)
}

console.log('Despues del try-catch')