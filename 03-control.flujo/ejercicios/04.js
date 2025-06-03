let dispositivo = 'secador';
let potencia;

switch (dispositivo.toLowerCase()) {
    case 'movil':
        potencia = 25;
        break;
    case 'macbook':
        potencia = 65;
        break;
    case 'lampara usb':
        potencia = 5;
        break;
    default:
        potencia = 0;
        console.log("No se detectó el dispositivo, no se suministrará energía.")
}

if (potencia > 0) {
    console.log(`La bateria suminsitra ${potencia} watts al ${dispositivo}`)
}