const libros = [
    {titulo: 'Libro A', autor: 'Autor A', categoria: 'Ficcion'},
    {titulo: 'Libro A', autor: 'Autor A',  anioPublicacion: 2021, numeroPaginas: 150},
    {titulo: 'Libro A', categoria: 'Historia', numeroPaginas: 150}
];

console.log(libros)

function estandarizarLibros(libro) {
    const propiedadesRequeridas = [
        'titulo',
        'autor',
        'anioPublicacion',
        'categoria',
        'numeroPaginas'
    ];

    for ( let i = 0; i < propiedadesRequeridas.length; i++) {
        const propiedad = propiedadesRequeridas[i];
        if (!(propiedad in libro)) {
            libro[propiedad] = null;
        }
    }
}

for (let i = 0; i < libros.length; i++) {
    estandarizarLibros(libros[i]);
}

console.log(libros);