const Entidad = {
    save() {
        console.log('save en Entidad')
    },
}

const Actualizar = {
    update() {
        console.log('actualizando Entidad')
    },
}

class User{
    constructor(name) {
        this.name = name;
    }

    save() {
        console.log('save en usuario')
    }
}

// componiendo dos objetos
const nuevoProto = Object.assign(Entidad, Actualizar);

Object.setPrototypeOf(User.prototype, nuevoProto)

const u = new User('Chanchito');
u.save();