// Dentro de un objeto: this hace referencia a un objeto

// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this);
//     }
// }

// user.logout = function logout () {
//     console.log(this);
// }

// user.logout();


// En una función this hace referencia a window, globar

// function log() {
//     console.log(this);
// }

// log();


// Si se usa new hace referencia al objeto que será creado

function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

/** CUANDO SE USA NEW
 * se crea un objeto literal
 * se vincula este objeto this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */
const l = new Log("hola mundo")