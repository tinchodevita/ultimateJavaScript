function Usuario() {
    // creando variable dentro del objeto de forma local es la forma de hacer las propiedades privadas
    let id = 1;
    this.name = 'Malrtin';

    let log = function log() {
        console.log('logging...')
    }

    this.guardar = function () {
        log();
        console.log('guardano...');
    }
}

const usuario = new Usuario();

// si log fuese publico se podria alterar la funcionalidad del mismo
// usuario.log = function() {
//     console.log('lala');
// }

usuario.guardar();