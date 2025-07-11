function getProto(u) {
    return Object.getPrototypeOf(u)
}

function Entidad() {}

Entidad.prototype.save = function() {
    console.log('guardando desde entidad...');
}

function User() {}

//crear un metodo con el mismo nombre del metodo del prototipo de entidad se lo conoce como METHOD OVERRIDE (reemplazar/invalidar/anular un metodo)
User.prototype.save = function() {
    console.log('guardando desde user...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const user1 = new User()

//demasiado engorroso, se encapsula
console.log(getProto(getProto(user1)).save())