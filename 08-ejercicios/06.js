function dividirPoTipo(arr) {
    return arr.reduce((acu, ele) => {
        let llave = typeof ele;

        acu[llave] = acu[llave] ? acu[llave] : [];
        acu[llave].push(ele);
        return acu;
        // console.log(acu, ele);
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