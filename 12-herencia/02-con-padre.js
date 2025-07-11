function Entidad(entidad) {
    this.id = Math.random().toString('20');
    this.entidad = entidad;
}

function User() {
    Entidad.call(this, 'user');
    this.attrs = {
        name: 'martin',
        email: 'mdevita@mail.com',
    }
}

const user = new User();
console.log(user);