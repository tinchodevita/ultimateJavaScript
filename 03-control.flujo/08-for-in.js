let usuario = {
    id: 1,
    name: 'chanchito feliz',
    age: 35,
};

// FOR IN DEVUELVE INDICE
for (let prop in usuario) {
    console.log(prop, usuario[prop]);
}

let animales = ['Chancho', 'dragon', 'kanguro'];
for (let i in animales) {
    console.log(i, animales[i]);
}
