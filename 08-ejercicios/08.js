const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 12, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Fernanda', plan: 'gold' },
    { edad: 32, nombre: 'Felipe', plan: 'free' },
];

const pagos = usuarios.filter(u => u.plan !== "free");

pagos.sort((a, b) => {
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = pagos.map(u => `<li>${u.nombre}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>`

console.log(html);