const obj = {
    nombre: 'Nicolas',
};

function Extender () {
    this.login = () => {console.log('Logeando a:',this.nombre);}
    this.logout = () => {console.log('Cerrando sesión a:',this.nombre);}
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();