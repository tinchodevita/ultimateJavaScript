let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');

// console.log(collection, list);

//buscar con las html collection por nombre
let item1 = collection.namedItem('chanchito');
//buscar con las html collection por item
let item2 = collection.item(3);
//buscar con las html collection como si fuera un array
let item3 = collection[3];

//iterar elementos
//of para iterar elemento no indices
// for (let el of collection)
//     console.log(el);

// tranformar collection a un array
//con esto muestra el objeto
// Array.from(collection).forEach(x => console.log(x));
//con esto muestra el elemento mismo
// [...collection].forEach(x => console.log(x))

let item4 = list.item(3);
let item5 = list[3];

list.forEach(x => console.log(x));

//entries, keys y values
let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(el => console.log(el))