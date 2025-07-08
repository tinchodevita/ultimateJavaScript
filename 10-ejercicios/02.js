const obj = {
    nombre: 'Martin',
};

obj['guiardar'] = function () {console.log('guardando...')}

function extender(usuario) {
    // usuario.login = () => {console.log(usuario.nombre, 'se está logeando')};
    // usuario.logout =() => {console.log(usuario.nombre, 'se está deslogeando')};

    const metodos = {
        login() {console.log(this.nombre, 'se está logeando')},
        logout() {console.log(this.nombre, 'se está deslogeando')},
    }
    //.assign se usa para agregar elementos a un objeto. toma como primer parámetro el objeto al cual se le van a agregar cosas y luego las cosas a agregar
    return Object.assign(usuario, metodos);
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();