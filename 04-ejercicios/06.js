let array = [-2, 0, 7, 15, -5, -100, 55];

function cuatosPositivos(arr){

    let cantidad = 0;
    for (i of arr) {
        if (i < 0) {
            cantidad ++;
        }
    }

    return cantidad;
}

let resultado = cuatosPositivos(array);
console.log(resultado);