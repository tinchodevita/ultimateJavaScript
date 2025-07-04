console.log(resta) //hoisting -> hizar/levantar 

// funcion nombrada -> named function
function suma() {
    console.log('sumando...');
}

// funcion anonima -> anonymous function
// function () {
//     console.log('funcion anonima')
// }

// expresion dfe funciones -> function expression
let resta = function () { //expresion de funcion anonima -> anonymous function expression
    console.log('restando...');
}

let multiplica = function multi() { //expresion de funcion nombrada -> name function expression
    console.log('multiplicando...');
}

// no se le puede asignar un nombre a las fat arroy function
const divide = () => {
    console.log('dividiendo...')
}