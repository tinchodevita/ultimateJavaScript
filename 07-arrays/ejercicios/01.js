const precios = [100, 200, 300, 400, 500];

function calcularPromedio (precios) {
    if (precios.length === 0) {
        return 0;
    }

    let suma = precios.reduce((acumulador, elemento) => {return acumulador + elemento}, 0)
    
    return suma / precios.length;
}

console.log(" El precio promedio es:", calcularPromedio(precios))
