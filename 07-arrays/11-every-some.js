let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: true},
    {id: 3, activo: true},
];

// let todosActivos = usuarios.every(u => {
//     console.log("Todos activos", u.id);
//     return u.activo;
// })

// console.log(todosActivos);

//devuelve true habiendo encontrado al menos un valor que retorne true
let algunActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
})

console.log(algunActivo);