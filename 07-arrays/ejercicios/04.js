let arr  = [1, 2, 2, 3, 4, 4, 5, 6, 6];

function eliminarDuplicados(array) {
    let listaSinDuplicados = [];

    for (let i = 0; i < array.length; i++) {
        if (!listaSinDuplicados.includes(array[i])) {
            listaSinDuplicados.push(array[i])
        } 
    }

    console.log(listaSinDuplicados);
};

eliminarDuplicados(arr);