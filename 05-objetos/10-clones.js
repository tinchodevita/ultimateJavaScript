let punto = {
    x:10,
    y:15,
};

// crear un obejto en base a las propiedades de otro objeto
// el objeto clonado toma las propiedades del objeto que está mas a la derecha
// en realidad lo que hace assign() es asignar 
let referencia = Object.assign(punto, {z: 20, x: 1});
let clonPunto = Object.assign({}, punto, {z: 20, x: 1});
// console.log(clonPunto);
// console.log(referencia);

// copias de objetos en JS
let copiaDePunto = Object.assign({}, punto)
// console.log(copiaDePunto)
// console.log(punto)

// otra forma de generar copias ...
let copia3 = { ...punto };
// console.log(copia3);

// ultima forma (no recomendada de copias objetos)
let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);