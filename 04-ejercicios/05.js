let array = [2, 5, 7, 15, -5, 55, -100];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (i of arr) {
        menor = menor < i ? menor : i;
        mayor = mayor > i ? mayor : i;
    }

    return [menor,mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);