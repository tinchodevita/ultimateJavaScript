const letras = ['a', 'b'];

//agregar elementos al final del array
letras.push('c', 'd');

//agregar elementos al comienzo de letras
letras.unshift('y', 'z');

//agregar elementos entre medio
letras.splice(3, 0, 1, 2)

console.log(letras);