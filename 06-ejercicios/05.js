let objeto = {
    id:1,
    name: false,
    login: function() {},
    logout: function() {},
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    let existe = false;

    for (let llave in obj) {
        if (llave === propiedad) {
            existe = true;
        }
    }

    return existe

}

let propExiste = tieneProp(objeto, propiedad);

console.log(propExiste)