const usuarios = {
    nombre: "Martin",
    apellido: "Devita",
    get nombreCompleto() {
        return `${usuarios.nombre} ${usuarios.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

console.log(usuarios.nombreCompleto);
usuarios.nombreCompleto = "Felipe Devita"
console.log(usuarios.nombreCompleto);