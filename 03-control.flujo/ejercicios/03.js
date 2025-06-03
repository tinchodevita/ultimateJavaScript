let encendida = false;
let tieneAgua = true;
let temperaturaAgua = 0;

if (tieneAgua) {
    console.log("La pava tiene agua, se puede encender correctamente.")
    encendida = true;
} else {
    console.log("La pava no tiene agua, no puede encender")
}

while (encendida == true) {
    
    if (temperaturaAgua < 100) {
        console.log(`La temperatura del agua es de: ${temperaturaAgua}`)
    } else if (temperaturaAgua >= 100) {
        console.log("La pava llegó a su punto de ebullición, se apagará.")
        console.log("");
        encendida = false;
    } else {
        temperaturaAgua += 25;
    }

}