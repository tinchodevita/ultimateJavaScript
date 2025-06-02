let i = 2;

// aca se evalua la condicion primero
// while (i < 2) {
//     if (i % 2 == 0){
//         console.log('Numero par', i)
//     }
//     i++;
// }

// aca se evalua la condicion al final
do {
    if (i % 2 == 0){
        console.log('Numero par', i)
    }
    i++;
} while (i < 2);

console.log('Fuera del while')