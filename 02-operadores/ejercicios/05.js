let paqueteUsuario = "EUR";

let contenidoLibre = true;

let contenidoFree = paqueteUsuario != "no registrado";

let contenidoEur = paqueteUsuario === 'EUR' || paqueteUsuario === "All Access";

let contenidoNacional = paqueteUsuario === "Nacional" || paqueteUsuario === "LATAM" || paqueteUsuario === "All Access";

let contenidoLatinoamericano = paqueteUsuario === "LATAM" || paqueteUsuario === "All Access";

console.log("Usuario con paquete: "+ paqueteUsuario);
console.log("¿Puede ver contenido libre?: "+contenidoLibre);
console.log("¿Puede ver contenido free?: "+contenidoFree);
console.log("¿Puede ver contenido de EUR?: "+contenidoEur);
console.log("¿Puede ver contenido Nacional?: "+contenidoNacional);
console.log("¿Puede ver contenido de LATAM?: "+contenidoLatinoamericano);