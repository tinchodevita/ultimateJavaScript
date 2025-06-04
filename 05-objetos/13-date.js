const ahora = new Date(); //fecha y hora de mi pc

const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha)
//Mes Dia Año

const fecha2 = new Date(1986, 5, 4, 12, 15);
console.log(fecha2);

console.log('DateString ' + fecha2.toDateString()); //formato mas corto y amigable
console.log('ISOString '+ fecha2.toISOString()); //es el mas facil de almacenar y el mas facil de transformar a otras fechas para usar en el servidor.
console.log('TimeString '+ fecha2.toTimeString()); //solo muestra la hora

//.get devuelve en number lo que sea que quieras
//.set podes cambiar lo que sea que quieras