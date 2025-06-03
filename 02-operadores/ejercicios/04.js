let largoHabitacion = 5.5;
let anchoHabitacion = 3;

let metrosCuadrados = largoHabitacion * anchoHabitacion;

let unaTonelada = metrosCuadrados < 16;
let toneladaYMedia = metrosCuadrados >= 16 && metrosCuadrados < 25;
let dosToneladas = metrosCuadrados >= 25 && metrosCuadrados <= 30;

console.log("El area de la habitacion es de: "+metrosCuadrados);
console.log(`El area de la habitacion es adecuada para una tonelada?: `+unaTonelada);
console.log(`El area de la habitacion es adecuada para una tonelada y media?: `+toneladaYMedia);
console.log(`El area de la habitacion es adecuada para dos toneladas?: `+dosToneladas);