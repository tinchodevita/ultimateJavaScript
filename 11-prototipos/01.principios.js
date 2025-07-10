//Encapsuación -> agrupar metodos y propiedades

// const user = {
//     nombre: 'Martin',
//     apellido: 'Devita',
//     getNombreCompleto() {
//         return [this.nombre, this.apellido].join(' ')
//     }
// };

// console.log(user.getNombreCompleto());


//Abstracción -> Esconder detalles. Sabes que está ocurriendo en el código sin necesidad de saber como sucede

const user = new User(); //en este caso sabemos que se está creando un nuevo usuario
user.password = 'Polki'; //sabemos que se está asignando una nueva clave
user.save(); //sabemos que se esta guardando este usuario


//Herencia -> objetos que heredan todas las propiedades y métodos de otros objetos

// User -> hereda de FCP
// Restaurante -> hereda de FCP
// Motociclista -> hereda de FCP

// Funcion Constructora Pare -> id, name, guardar() 


//Polimorfismo -> Realizar 3 acciones de formas distintas por mas que tengan el mismo nombre (se respeta el contexto)

function validarEntidad(entidad) {
    // ...

    entidad.save(); //save puede hacer referencia a una funcion de User, Restaurante y Motociclista aun que hagan cosas distintas
}