function dividirPoTipo(arr) {
    return arr.reduce((acu, ele) => {
        let llave = typeof ele;

        acu[llave] = acu[llave] ? acu[llave] : []; //pregunta si acu[llave] es undefined
        acu[llave].push(ele);
        
        return acu;
    }, {})
}

const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15},
    ['lala']
];

let arr = dividirPoTipo(miArray);
console.log(arr);