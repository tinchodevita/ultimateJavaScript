const p1 = Promise.reject('Fallo conexion al sevidor');
const p2 = Promise.reject(43);
const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'foo');
});

//se resuelve .then una vez que todas las promesas fueron resueltas. Si alguna es rechazada se ejecuta .catch
// Promise.all([p1, p2, p3])
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));

//la primera que sea rechaza o resuelta se devuelve el valor
// Promise.race([p1, p2, p3])
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// Promise.any([p1, p2, p3])
//     .then(valor => console.log({ valor }))
//     .catch(e => console.log( { e }));

//independientemente de si son o no rechazadas estas se envuelven dentro de un objeto con la propiedad de status y de reason
//si estamos trabajando con promesas que vamos a rechazar se deberia pasar el valor del error y no, por ejemplo, un numero entero
Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({ valores }))
    .catch( e => console.log({ e }));