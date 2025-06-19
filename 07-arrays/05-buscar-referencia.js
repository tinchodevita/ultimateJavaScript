const usuarios = [
    {id: 1, name: "Chanchito"},
    {id: 2, name: "Feliz"},
];

// const resultado = usuarios.indexOf({id: 1, name: "Chanchito"})

// funcion que se le pasa funciones o metodos se les llama predicate
// predicate = funcion que devuelve true o false
const resultado = usuarios.find( usuario => 
    // if (usuario.id == 1) {
    //     return true;
    // }
    usuario.name === "Chanchito"
)
const resultado2 = usuarios.findIndex( usuario => usuario.name === "Chanchito")

console.log(resultado2)