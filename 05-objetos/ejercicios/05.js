function Carta(nombre, puntosDeVida, tipo, ataque, debilidad) {
    this.nombre = nombre;
    this.puntosDeVida = puntosDeVida ;
    this.tipo = tipo;
    this.ataque = ataque;
    this.energia = 0;
    this.debilidad = debilidad;

    this.atacar = function(cartaObjetivo, ataqueNumero) {
        if (ataqueNumero >= this.ataque.length) {
            console.log(`Lo sentimeos no posee el ataque número: ${ataqueNumero}`)
        }

        let ataque = this.ataque[ataqueNumero];
        if (ataque.energiaRequerida > this.energia) {
            console.log(`Lo sentimos ${this.nombre}, no posee energía para atacar.`)
        } else {
            console.log(`${this.nombre} está atacando con ${ataque.nombre} causando ${ataque.puntosDeDanio} de daño.`)
            cartaObjetivo.recibirAtaque(ataque.puntosDeDanio);
            this.energia -= ataque.energiaRequerida;
        }
    }

    this.recibirAtaque = function(puntosDeDanio) {
        if (this.puntosDeVida <= 0){
            return console.log('La carta atacada ya no posee puntos de vida, no se puede realizar el ataque.')
        } else {
            this.puntosDeVida -= puntosDeDanio;
            console.log(`${this.nombre} ha recibido ${puntosDeDanio} de daño. Vida restante: ${this.puntosDeVida}.`);
        };

        if (this.puntosDeVida <= 0) {
            console.log(`${this.nombre} ha sido derrotado.`)
        };
    };

    this.recibirEnergia = function(energiaRecibida) {
        this.energia += energiaRecibida;
        console.log(`${this.nombre} ha recibido ${energiaRecibida} putos de energía. Energía actual: ${this.energia}`);
    };
}

const carta1 = new Carta('Dragón de Fuego', 100, 'Fuego',
    [
        {nombre: 'Llamarada', puntosDeDanio: 30, energiaRequerida: 2},
        {nombre: 'Golpe Ígneo', puntosDeDanio: 50, energiaRequerida: 3}
    ],
    'Agua'
);

const carta2 = new Carta('Serpiente Acuática', 120, 'Agua', 
    [
        {nombre: 'Tsunami', puntosDeDanio: 40, energiaRequerida: 2}
    ],
    'Eléctrico'
);

carta1.recibirEnergia(2);
carta1.atacar(carta2, 0);
console.log('\n');
carta2.recibirEnergia(3);
carta2.atacar(carta1, 0);
console.log('\n');
carta1.atacar(carta2, 1);
console.log('\n');
carta1.recibirEnergia(3);
carta1.atacar(carta2, 1);
console.log('\n');
carta1.recibirEnergia(3);
carta1.atacar(carta2, 1);
console.log('\n');
carta1.recibirEnergia(2);
carta1.atacar(carta2, 0);