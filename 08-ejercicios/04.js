const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 12, nombre: 'Chanchito', plan: 'premium'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

const cuantosPremium = (users) => users.reduce((acu, ele) => {return ele.plan !== "free" ? acu + 1 : acu;}, 0)

const cuantosMayores = (users) => users.reduce((acu, ele) => { return ele.edad > 18 ? acu + 1 : acu; }, 0)
    // return users.filter(u => u.edad > 18).length

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));