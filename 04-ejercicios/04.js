function impares() {
    for (let i = 0; i < 10; i++){
        if (i % 2 !== 0) {
            console.log('Impar '+ i)
        }
    }
}

impares = impares();
console.log(impares)