const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 12, nombre: 'Chanchito', plan: 'free'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function getPaidUsers(users){
    return users.filter(u => u.plan !== "free")
};

console.log(getPaidUsers(usuarios));