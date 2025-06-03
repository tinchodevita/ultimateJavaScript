let tieneContenedor = false;
let numeroTazas = 3;
const tiempoPorTaza = 4;

if (!tieneContenedor) {
    console.log("No se registró el contenedor, no se puede prender el molino.")
} else if (numeroTazas <= 0) {
    console.log("No se registraron tazas, no se puede iniciar el molino.")
} else {
    console.log("Encendiendo molino...");
    let tiempoTotal = numeroTazas * tiempoPorTaza;

    console.log(`Moliendo café para ${numeroTazas} tazas...`)
    console.log(`Tiempo estimado: ${tiempoTotal} segundos`)
}