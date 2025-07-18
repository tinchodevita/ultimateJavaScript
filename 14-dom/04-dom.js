let el = document.createElement('p');
el.innerText = 'Elemento creado';

//appedn -> agrega al final del documento HTML. Puede recibir texto y nodos
document.body.append(el);

//eliminar elemento
el.remove();

//agregar al comienzo
document.body.prepend(el);

//reemplazar elementos
let div = document.createElement('div');
div.innerText = 'Soy un texto';
el.replaceWith(div);

//alternativa para reemplazar elementos
document.body.replaceChild(el, div); //recibe lo que queres poner y como segundo parametro y QUE queres camb
document.body.removeChild(el);
//appendChild solo recibe nodos
document.body.appendChild(el);

//insertar elementos
document.body.insertBefore(div, el); //quiero insertar el div antes del elemento 'el' o parrafo

//beforebegin lo inserta antes de abrir la etiqueta
document.body.insertAdjacentElement('beforebegin', div);
//afterbegin lo inserta comienzo, pero despues de la etiqueta
document.body.insertAdjacentElement('afterbegin', div);
//inserta al final de la etiqueta, pero antes del cierre
document .body.insertAdjacentElement('beforeend', div);
//inserta despues del cierre de la etiqueta
document .body.insertAdjacentElement('beforebegin', div);

//solo nos permite insertar HTML
document.body.insertAdjacentHTML();
//solo nos permite insertar texto
document.body.insertAdjacentText();