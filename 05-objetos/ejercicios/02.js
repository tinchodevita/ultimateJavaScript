function Usuario (nombre, apellido, fechaNac, direccion, edad, paisNac, susActiva) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.fechaNac = fechaNac,
    this.direccion = direccion,
    this.edad = edad,
    this.paisNac = paisNac,
    this.susActiva = susActiva
}

const usuario1 = new Usuario('Chanchito', 'Feliz', '10 de Abril de 1992', 'Av, Siempre Viva 742', 31, 'Mexico', false);

if ("susActiva" in usuario1) {
    usuario1.susActiva = !usuario1.susActiva;
}

if ("direccion" in usuario1) {
    delete usuario1.direccion
}

if ("altura" in usuario1) {
    delete usuario1.altura
}

console.log(usuario1)