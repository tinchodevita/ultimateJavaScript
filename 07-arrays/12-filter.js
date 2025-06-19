const usuarios = [
    {edad: 17, nombre: "Nico"},
    {edad: 13, nombre: "Martin"},
    {edad: 18, nombre: "Felipe"},
    {edad: 19, nombre: "Matias"},
];

const mayoresEdad = usuarios.filter(usuario => usuario.edad > 17);
const menoresEdad = usuarios.filter(usuario => usuario.edad < 18);

console.log(mayoresEdad);
console.log(menoresEdad);