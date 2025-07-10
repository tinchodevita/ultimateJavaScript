function suma (fn, ...rest) {
    let resultado = rest.reduce((acc, ele) => acc + ele)

    fn(resultado);
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4)