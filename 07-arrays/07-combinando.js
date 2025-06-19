let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
// console.log(arr1, arr2, combinados) //[1, 2], [3, 4], [1, 2, 3, 4]

// let dividios = combinados.slice(1, 3);
// console.log(dividios); //[2, 3]
let dividios = combinados.slice(1);
console.log(dividios); //[2, 3, 4]