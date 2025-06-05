const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log('dibujando')
    }
};


// delete punto.dibujar;

// if ('dibujar' in punto){
//     punto.dibujar();
// }

// let keys = Object.keys(punto);
// console.log(Object.keys(punto));

//imprimiendo llave y valor del objeto primitivo, sin alteraciones 
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

//.entries devuelve un array de llave como string y valor
// for (let entry of Object.entries(punto)){
//     console.log(entry);
// }

//recorre el objeto inclusive si este ha sido modificado con prototype
for (let llave in punto){
    console.log(llave, punto[llave]);
}