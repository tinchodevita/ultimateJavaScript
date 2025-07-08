const usuario = {
    nombre: 'Martin',
    ciudadanias: ['Argentina', 'Española'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            //this en una funcion hace referencia a windows
            //
            console.log(this.nombre, ciudadania)
        });
    }
}

usuario.mostrarCiudadanias();