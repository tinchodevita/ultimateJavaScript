class User {
    //simbolo de numeral para metodos o propiedades privados
    #name;

    constructor(name) {
        //# para usarlo dentro de la misma clase
        this.#name = name;
    }

    #logger() {
        console.log('loggeando')
    }

    getName() {
        this.#logger();
        return this.#name;
    }

}

const u = new User('Chanchito Feliz');

//no se puede acceder desde la isntancia
console.log(u.name);