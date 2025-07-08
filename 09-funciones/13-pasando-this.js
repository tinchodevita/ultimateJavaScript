// (function saludar(...rest) {
//     console.log(this, rest);
// }).bind({propiedad: 'hola mundo'})(3, 5)

// saludar.call({propiedad: 'hola mundo'}, 1, 5);
// saludar.apply({propiedad: 'hola mundo'}, [1, 5]);


const usuario = {
    nombre: 'Martin',
    ciudadanias: ['Argentina', 'Española'],
    mostrarCiudadanias() {
        // let self = this;
        this.ciudadanias.forEach( function (ciudadania) {
            //this en una funcion hace referencia a windows
            //
            console.log(this.nombre, ciudadania)
        },this)//.bind(this));
    }
}

usuario.mostrarCiudadanias();