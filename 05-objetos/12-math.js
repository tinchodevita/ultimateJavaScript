console.log(
    Math.PI, //3.14
    Math.abs(-15), //devuelve valor absoluto de un numero
    Math.round(15.5), //redondear numero con decimales (>= .5 redondea hacia arriba y < .5 redondea hacia abajo)
    Math.round(15.4), 
    Math.floor(15.9), //redondea el numero siempre hacia abajo
    Math.ceil(15.0000001), //redondea siempre hacia arriba
    Math.pow (2, 3), //calcular la potencia de un numero
    Math.sqrt(9), //devuelve la raiz cuadrada de un numero
);

console.log(Math.random()); //genera numeros randoms (por default siempre entre 0 y 1)

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));