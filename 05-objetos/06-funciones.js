function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Martin');

console.log(user);

// PASANDO FUNCIONES COMO PARAMETROS
function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Felipe');
console.log(user1);

// RETORNANDO UNA FUNCION
function returned() {
    return function() {
        console.log('Hola mundo')
    }
}

let saludo = returned();
saludo();