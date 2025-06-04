const saludo = "Hola \\mundo!\nBienvenidos a\t \"ultimate javascript\"  :)";

const nombre = 'Martin'
const apellido = 'Devita'
const nombreCompleto = nombre + ' ' + apellido;
function plantilla(nombre, apellido) {
    return `Hola ${nombre} ${apellido}!
    
    Bienvenidos a "Ultimate Javascript" :)
    
    Saludos tincho.`
    
} 

console.log(plantilla('Juan', 'Dominguez'));