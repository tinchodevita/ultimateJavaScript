let tipoMascota = 'perro';
let pesoAnimal = 7;
let cantidadComida;

if(tipoMascota.toLowerCase() === 'perro') {
    if (pesoAnimal < 5) {
        cantidadComida = 100;
    } else if (pesoAnimal >= 5 && pesoAnimal <= 9.99){
        cantidadComida = 200;
    } else if (pesoAnimal >= 10 && pesoAnimal <= 19.99)  {
        cantidadComida = 300;
    } else if (pesoAnimal > 20) {
        cantidadComida = 400;
    }
    if (cantidadComida !== null) {
    console.log(`El alimentador liberará ${cantidadComida} gramos de comida para tu ${tipoMascota}.`)
}
} else if (tipoMascota.toLowerCase() === 'gato') {
    if (pesoAnimal < 3) {
        cantidadComida = 50;
    } else if (pesoAnimal >= 3 && pesoAnimal <= 5.99){
        cantidadComida = 100;
    } else if (pesoAnimal > 6) {
        cantidadComida = 150;
    }
    if (cantidadComida !== null) {
    console.log(`El alimentador liberará ${cantidadComida} gramos de comida para tu ${tipoMascota}.`)
}
} else {
    console.log("Este animal no está permitido.")
}