const saludo = 'Hola Mundo!';

//devuelve object
const despedida = new String("Chao mundo: (")
console.log(typeof despedida)

console.log(saludo.length);
console.log(saludo.indexOf('Mu')); //devuelve el indice
console.log(saludo.includes(' Mundo')); //devuelve true o false
console.log(saludo.replace('Mundo', 'Martin')); // permite reemplezar, pero no cambia la variable original sino que retorna un nuevo string
console.log(saludo.toLowerCase()); //todo a minuscula
console.log(saludo.toUpperCase()); //todo a mayuscula

console.log(saludo.substring(0, 4)); //devuelve el texto a partir de n y m marca la cantidad (n, m)
console.log(saludo.substr(2, 4)); //deprecado, igual que substring

const espacio = '    Hola  Mundo!  '
console.log(espacio.trim()) //quita espacios a la izquierda y a la derecha
console.log(espacio.trimEnd()) //quita espacion a la izquierda
console.log(espacio.trimStart()) //quita espacion a la derecha