function User() {
    this.name = 'Martin Devita';
    //método de instancia. la instancia tiene su propio método
    this.logger = function () {
        console.log('loggeando...')
        this.login();
    }
}

const user1 = new User();
const user2 = new User();

//método de prototipo. cadena de prototipo
User.prototype.login = function () {
    console.log('iniciando sesión', this.name);
}

User.prototype.toString = function () {
    console.log('Usuario:', this.name)
}
console.log(user1.login());
// user1.login();
// console.log(user1.login == user2.login); //devuleve false ya que el login de user 1 es distinto a user 2