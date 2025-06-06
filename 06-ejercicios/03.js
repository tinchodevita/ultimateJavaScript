function similares(obj1, obj2) {
    let distintos = false;

    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
            distintos = true;
        }
    }
    return !distintos;
}

let resultado = similares(
    {id:1, name: 'Nico'},
    {id:1, name: 'Martin'},
);

console.log(resultado)