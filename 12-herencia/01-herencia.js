//creamos objeto User
function User() {
    this.name = 'Hola mundo';
}

function Product() {
    this.name = 'Prducto';
}

function Entidad() {}

Entidad.prototype.save = function() {
    console.log('guardando...', this.name);
}
Entidad.prototype.valdiate = function() {
    console.log('validando...', this.name);
}

// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;

//FORMA ANTIGUA DE EXTENDER PROTOTIPOS
//a el objeto User le vinculamos un objeto completamente vacío a excepcion del constructor
// User.prototype = Object.create(Entidad.prototype); //asignamos prototipo al objeto User
// User.prototype.constructor = User; //aca se preserva el constructor del objeto inicial

//EXTENDER PROTOTIPOS CON ES6
//recibe como primer parametro el prototipo al que quermeos extenderle un prototipo
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype); //claro ejemplo de herencia

const user1 = new User();
console.log(user1);