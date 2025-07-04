const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 12, nombre: 'Chanchito', plan: 'free'},
    { edad: 25, nombre: 'Fernanda', plan: 'gold'},
    { edad: 32, nombre: 'Felipe', plan: 'free'},
];

function groupBy(arr, prop) {
    // let objeto = {};
    return arr.reduce((acu, ele) => {
        let llave = ele[prop];

        acu[llave] = acu[llave] ? acu[llave] : []; //pregunta si acu[llave] es undefined
        acu[llave].push(ele);

        return acu;
    }, {})

}

const grouped = groupBy(usuarios, 'plan');
console.log({grouped});