class Restaurants {
    static cantidad = 12;

    constructor(name) {
        this.name = name;
    }

    getTimetable() {
        console.log('horario restaurante')
    }

    static getRestaurant(id) {
        return new Restaurants('BBQ')
    }
}

//metodo estatico pertenece a la intancia de la clase, pero no a la instancia del objeto
const r = Restaurants.getRestaurant(12);

const arr = new Array();
// Array.isArray;
// Array.from();
// Object.assign();