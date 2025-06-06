let objeto = {
    id:1,
    name: 'chanchito',
    login: function() {},
    logout: function() {},
}

function cualEsMetodo(obj) {
    for(let llave in obj) {
        
        if(typeof obj[llave] == 'function'){
            console.log(llave);
        }

    }
}

cualEsMetodo(objeto);