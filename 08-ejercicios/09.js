const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 12, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Fernanda', plan: 'free' },
];

const users = [
    { age: 22, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Miguel', membership: 'free' },
];

const listaEspaniol = users.map(u => ({
    edad: u.age,
    nombre: u.age,
    plan: u.membership
}));

const listaNuevaUsuarios = [...usuarios, ...listaEspaniol];

listaNuevaUsuarios.sort((a, b) => {
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
})

const lista = listaNuevaUsuarios.map(u => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>`

console.log(html)