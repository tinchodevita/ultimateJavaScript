let arrConCeros = [0, 1, 0, 3, 12, 0, 5];

function cerosAlFinal(array) {
    return array.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 0))
};

console.log(cerosAlFinal(arrConCeros));