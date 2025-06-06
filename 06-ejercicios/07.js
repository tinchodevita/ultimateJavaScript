let objeto = { name: 'Martin' };

function agregarId(obj) {
    if (typeof obj === 'object') {
        obj.Id = Math.random();
    }
}

agregarId(objeto);
console.log(objeto);