let array1 = [10, 5, 8];
let array2 = [2, 7, 3];

function ordenarYJuntar(arr1, arr2) {
    let arrayConjunto = arr1.concat(arr2);

    return arrayConjunto.sort((a, b) => a - b)
}

console.log(ordenarYJuntar(array1, array2))