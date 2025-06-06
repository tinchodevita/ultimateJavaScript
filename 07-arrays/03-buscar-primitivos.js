const letras = ['a', 'b', 1, 'c', 'd', 1];

//buscar elemento por indice (traer el primero si es que se repite)
console.log(letras.indexOf('c'));
console.log(letras.indexOf(1));
//tambien se le puede indicar a partir de que indice empezar a buscar
console.log(letras.indexOf(1, 3));

//hace lo mismo, pero empieza a recorrer de atrás para adelante
//console.log(letras.lastIndexOf(1));

//antiguamente para indicar si un elemento existia en el array
//console.log(letras.indexOf(1) !== -1);
//pero ahora se busca asi
//console.log(letras.includes('d'));