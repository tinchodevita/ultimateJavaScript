function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela() {console.log('volando...')}
}

let nada = {
    nada() {console.log('nadando...')}
}

let banio = {
    banio() {
        console.log('yendo al baño...')
    }
}

let camina = {
    camina() {
        console.log('caminando...')
    }
}

//vuela, nada, camina y va al baño
function Pato() {}
mixin(Pato, vuela, nada, camina, banio);
let patito = new Pato;

//camina, nada y va al baño
function Perro() {}
mixin.assign(Perro, nada, banio, camina)
let perrito = new Perro();

//nada y va al baño
function Pez() {}
mixin(Pez, nada, banio);
let p = new Pez();

//vuela
function Avion() {}
mixin(Avion, vuela);

// console.log(Avion.prototype, new Avion);