let afuera = 'Estoy afuera'

function alcance() {
    afuera = 'Estoy adentro';
    function saludo() { }
    var vieja = 'ya no debes usarla';
    let variable = 'hola mundo';
    const constante = 'chao mundo';

    // console.log(saludo);
    // console.log(vieja);
    // console.log(variable);
    // console.log(constante);
}

console.log(afuera);
alcance();
console.log(afuera);