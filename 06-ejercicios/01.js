function Usuario(name) {
    this.id = Math.random();
    this.name = name;
};

let usuario1 = new Usuario ('martin')
let usuario2 = new Usuario ('sol')
console.log(usuario1);
console.log(usuario2);