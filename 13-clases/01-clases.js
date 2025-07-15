// function User(nme) {
//     this.name = this.name;
//     this.instancia = function() {}
// }

// User.prototype.login = function() {
//     console-this.login('Hola mundo')
// }

class User {
    constructor(name) {
        this.name = name;
        this.isntancia = function() {}
    }

    activo = true;

    //en ese caso se le está asginando a la instancia del usuario y no al prototipo
    logout = () => {console.log('Chau Mundo')}

    //usando esta sintaxis los metodos se van a agregar al prototipo de User()
    login() {
        console.log('Hola Mundo')
    }
}

const u = new User('Chanchito feliz')