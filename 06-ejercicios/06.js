let obj1 = {id: 1, name: 'chanchito'};

function crearCopia(obj) {
    let copia = {};

    for (let llave in obj) {
        copia[llave] = obj [llave];
    }

    return copia;
}

let copiaObj = (crearCopia(obj1));

console.log(obj1);
console.log(copiaObj);