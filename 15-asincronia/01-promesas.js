/**
 * las promesas representan el estado de una peticion
 * estas pueden ser: pendientes (pending)
 *                   rechazada (rejected)
 *                   terminada (fulfilled)
 * Se utilizan para: consultas a base de datos
 *                   peticiones a servidores
 *                   webworkers -> se utilizan para hacer calculos muy complejos
 */

//la instancia de una promesa recibe una funcion para parametro y esta dos argumentos. Que vienen siendo "resolve y reject"
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hola mundo"), 1000);
});

promesa.then(
    valor => console.log(valor),
    e => console.log('error', e),
);