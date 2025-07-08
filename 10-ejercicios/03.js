function callback(fn, ...rest) {
    // fn(...rest);
    // for (let num of rest) {
    //     return num;
    // }
    fn(...rest);
}

function log (...args) {
    console.log(args);
}

//otra forma de hacerlo. callback ejecuta una funcion que recibe sus propropios parametros como argumentos
callback((...args) => {
    console.log(args);
}, 1, 2, 3, 4)

callback(log, 1, 2, 3, 4);