let nombre = "Killua"
let anime = "HunterxHunter"
let edad = 12

// clave - valor
let personaje = {
    nombre: 'Killua',
    anime: 'HunterxHunter',
    edad: 12,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

// modificar propiedad
personaje.edad = 13;
personaje['edad'] = 14;

// elimiar de un objeto
delete personaje.anime;

console.log(personaje);
