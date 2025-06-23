const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 12, nombre: 'Chanchito', plan: 'premium'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

// function obtenerMayor(arr) {
//     return arr.reduce((acu, ele) => {return (ele.edad > acu.edad) ? ele : acu})
// };

function obtenerMayor(arr) {
    let mayor = arr[0];
    for (let usuario of arr) {
        if (usuario.edad > mayor.edad) {
            mayor = usuario;
        }
    }

    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);