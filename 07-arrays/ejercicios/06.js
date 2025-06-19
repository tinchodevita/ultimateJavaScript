function Evento(nombreEvento, duracionEvento, boletosDisponibles) {
    this.nombreEvento = nombreEvento;
    this.duracionEvento = duracionEvento;
    //cuando se declara una variable privada debe ser distinta a la ya declarada en el constructor
    let _boletosDisponibles = boletosDisponibles;
    let boletosRegistrados = [];

    this.mostrarInformacion = function (){
        console.log(`El ${nombreEvento} tendrá una duración de ${duracionEvento} horas y hay ${boletosDisponibles.length} entradas disponibles.`);
    };

    this.registrarBoleto = function (boleto) {
        if (boletosDisponibles.includes(boleto)){
            boletosRegistrados.push(boleto);
            boletosDisponibles = boletosDisponibles.filter(b => b!== boleto);
            console.log(`Boleto registrado: ${boleto}`)
        } else if (boletosRegistrados.includes(boleto)) {
            console.log("Lo sentimos, este boleto ya ha sido registrado.")
        } else {
            console.log("Boleto inválido o inexistente.")
        }
    }

    this.regresarBoleto = function (boleto) {
        if (boletosRegistrados.includes(boleto)) {
            boletosRegistrados = boletosRegistrados.filter(b => b !== boleto)
            console.log(`Boleto regresado: ${boleto}`)
            boletosDisponibles.push(boleto)
        } else {
            console.log("Este boleto no está registrado.")
        }
    }
};

const evento1 = new Evento("Concierto de Paul McCartney", 3, [1, 2, 3, 4, 5]);

evento1.mostrarInformacion();

evento1.registrarBoleto(2);
evento1.registrarBoleto(3);
evento1.registrarBoleto(2);
evento1.registrarBoleto(6);

evento1.mostrarInformacion();

evento1.regresarBoleto(2);

evento1.mostrarInformacion();

evento1.regresarBoleto(6);