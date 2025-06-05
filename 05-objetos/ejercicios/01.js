function Usuario (nombre, apellido, fechaNac, direccion, edad, paisNac, susActiva) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.fechaNac = fechaNac,
    this.direccion = direccion,
    this.edad = edad,
    this.paisNac = paisNac,
    this.susActiva = susActiva
}

const usuario1 = new Usuario('Chanchito', 'Feliz', '10 de Abril de 1992', 'Av, Siempre Viva 742', 31, 'Mexico', true);
const usuario2 = new Usuario('Chanchito', 'Triste', '25 de Junio de 1985', 'Calle Luna 123', '33', 'España', false);
const usuario3 = new Usuario('Martin', 'Devita', '3 de Septiembre de 2001', 'Boulevard del Sol 456', 23, 'Argentina', true)

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);