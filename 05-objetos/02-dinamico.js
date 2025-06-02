const user = {id: 1};

// AGREGANDO PROPIEDADES AL OBJETO
user.name = 'Martin';
user['guardar'] = function () {
    console.log("Guardando", user.name)
}

console.log(user); 
user.guardar();

// ELIMINAR PROPIEDADES DEL OBJETO
delete user.name;
delete user.guardar;
console.log(user);

// NO SE PUEDE MODIFICAR OBJETO CREADO
const user1 = Object.freeze({id: 1,});
user1.name = 'Martin';
user1.id = 2;

console.log(user1);

// CON SEAL DE PUEDE MODIFICAR PROPIEDADES PERO NO ELIMINAR Y AGREGAR
const user1 = Object.seal({id: 1,});
user1.name = 'Martin';
user1.id = 2;

console.log(user1);