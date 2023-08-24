// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array[6, 9, 12, 15, 18].

// let matriz = [[3], [6], [9], [12], [15]];
// let array = [];
// for (let i = 0; i < matriz.length; i++) {
//     array.push(matriz[i][0] + 3);
// }
// alert('[' + array + ']');

//otra forma
let array = [[3], [6], [9], [12], [15]];

array = array.flat();
array.splice(0, 1);
array.push(18);

console.log(array);