function crearUsuario (name, id) {
    return {
        id: Math.random(),
        name,
    }
}

let user1 = crearUsuario('Martin')
let user2 = crearUsuario('Sol')

console.log(user1, user2);