//map sirve para crear un nuevo array aplicándole una funcion a cada uno de los elementos del array original

const usuarios = [
    {edad: 17, nombre: "Nico"},
    {edad: 13, nombre: "Martin"},
    {edad: 18, nombre: "Felipe"},
    {edad: 19, nombre: "Matias"},
];

const lista = usuarios
    .filter(usuario => usuario.edad > 17)
    .map((usuario => `<li>${usuario.nombre}</li>`));
    
const html = `<ol>${lista.join('')}</ol>`

console.log(html);

// const mapped = usuarios.map(usuario => ({...usuario, mayor: usuario.edad > 17,}));

// console.log(mapped);