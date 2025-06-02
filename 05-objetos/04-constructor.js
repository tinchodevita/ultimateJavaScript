// FUNCION CONSTRUCTORA UPPER CAMEL CASE O PASCAL CASE
function Usuario(){
    this.id = 1;
    // LAS FUNCIONES DENTRO DE LOS OBJETOS PASAN A SER METODOS!
    this.recuperarClave = function () {
        console.log("Recuperando clave...");
    }
}

let usuario = new Usuario();

console.log(usuario);