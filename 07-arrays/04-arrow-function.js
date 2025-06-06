// function hola() {
//     return 'Hola mundo';
// }

/**
 * para fat arrow function siempre const y son funciones anonimas
 * si son funciones de una sola linea, tiene el return implícito 
 * si tienen un solo parametro puede ir sin paréntesis
 */

const hola = mensaje => mensaje + 'Hola mundo';

const hola2 = () => {
        return 'Hola mundo';
    } 
    
const resultado = hola('chanchito feliz');
console.log(resultado);