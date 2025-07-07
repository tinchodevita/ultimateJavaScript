const suma = (a, b, ...rest) => {
    console.log(rest)
}

// suma(1, 2, 3, 4);

// const logMsj = (desc, ...msjs) => {
//     for (let msg of msjs) {
//         console.log(desc, msg);
//     }
// }

function logMsj (desc, ...msjs) {
    for (let msg of msjs) {
        console.log(desc, msg);
    }
}
// logMsj("Servidor:", 'Error 1', 'Peticion aceptada', 'Sockey Activo')
 let mensajes = ['Error 1', 'Peticion aceptada', 'Sockey Activo']

logMsj('Cliente móvil:', ...mensajes, 'Otro error')