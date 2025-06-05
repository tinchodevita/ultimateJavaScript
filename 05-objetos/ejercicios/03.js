function Evento(nombreEvento, duracionEvento, boletosDisponibles) {
    this.nombreEvento = nombreEvento;
    this.duracionEvento = duracionEvento;
    //cuando se declara una variable privada debe ser distinta a la ya declarada en el constructor
    let _boletosDisponibles = boletosDisponibles;

    this.mostrarInformacion = function (){
        console.log(`El evento ${nombreEvento} tendrá una duración de ${duracionEvento} y hay ${boletosDisponibles} disponibles.`);
    };

    this.comprarBoleto = function (boletosComprados){
        if (boletosComprados <= 5){
            if (boletosDisponibles > 0) {
                boletosDisponibles = boletosDisponibles - boletosComprados;
                console.log(`Usted ha comprado ${boletosComprados} boletos.`)
            } else {
                console.log('Lo sentimos ya no hay más boletos.')
            }
        } else {
            console.log('La cantidad de boletos máximos por compra es de 5 boletos.')
        }
    };

    this.cancelarBoleto = function (boletosCancelar) {
        boletosDisponibles += boletosCancelar;
        console.log(`Se le devolvió la cantidad de ${boletosCancelar} boletos. ¿Usted es creyente?`)
    };
}

const evento1 = new Evento("Mandarine", "2 horas", "50");

evento1.mostrarInformacion();
evento1.comprarBoleto(3);
evento1.mostrarInformacion();
evento1._boletosDisponibles = 100;
console.log('Intentando cambiar la propiedad de boletos disponibles...')
evento1.cancelarBoleto(1);
evento1.mostrarInformacion();