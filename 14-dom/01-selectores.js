//HTMLElement 
let htmlElement = document.getElementById('cuerpo');

//HTMLCollection -> se parece a un array, pero no lo es!
let elementosRed = document.getElementsByClassName('red');

//devuelve NodeList
let elementosChanchito = document.getElementsByName('chanchito');

//HTMLCollection
let parrafos = document.getElementsByTagName('p')

//ESTOS DOS ULTIMOS SON LENTOS
//HTMLElemnt <- devuelve solo un elemento
let el = document.querySelector('#cuerpo')
//NodeList
let els = document.querySelectorAll('p')

/**
 * diferencia entre collection y node:
 * collection -> refleja siempre los ultimos cambios del dom
 * node -> no siempre refleja los cambios
 */

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');

console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

//claro ejemplo de como node no actualiza de forma real
console.log(plive, pstatic);