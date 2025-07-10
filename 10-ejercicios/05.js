function ordenar(texto, fn) {
    let txtAlfa = texto.toLowerCase()
    .split('')
    .filter(x => x !== ' ')
    .sort()
    .join('');
 
    fn(txtAlfa);
}

ordenar('hola muNdo', console.log);