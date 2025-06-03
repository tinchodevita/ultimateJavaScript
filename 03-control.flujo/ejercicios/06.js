let tieneCuenta = true;
let puntajeDeCredito = 701
let tasaInteres;

if (!tieneCuenta || puntajeDeCredito < 650) {
    console.log("Lo sentimos, no podemos otorgarle un préstamo.")
} else if (puntajeDeCredito >= 650 && puntajeDeCredito <= 699) {
    tasaInteres = 20;
} else if (puntajeDeCredito >= 700 && puntajeDeCredito <= 749) {
    tasaInteres = 15;
} else if (puntajeDeCredito >= 750) {
    tasaInteres = 10;
}

if (tieneCuenta && tasaInteres !== null && tasaInteres >= 15) {
    tasaInteres *= 0.9
}

if (tasaInteres != null) {
    console.log("El préstamo ha sido aprobado.")
    console.log("Tasa de interes final: "+tasaInteres + "%")
}
