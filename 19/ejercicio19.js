// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A de 50 números reales,
// y el segundo B, un arreglo de 20 números, también reales. El programa deberá inicializar el arreglo A con números 
// aleatorios y mostrarlo por pantalla. Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 
// 10 números ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 0.5. 
// Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20.

// Creo arr50 de 50 números reales aleatorios
let arr50 = [];
for (let i = 0; i < 50; i++) {
    arr50.push(Math.random() * 50);
}
console.log("Array A original:");
console.log(arr50);


// Ordeno arr50 de menor a mayor
arr50.sort(function (a, b) {
    return a - b;
});


let arr20 = [];

// Copio los primeros 10 números ordenados de arr50 a arr20
arr20 = arr50.slice(0, 10);

// Relleno los últimos 10 elementos de arr20 con el valor 0.5
for (let i = 0; i < 10; i++) {
    arr20.push(0.5);
}

// Muestro arr50 ordenado
console.log("Array A ordenado:");
console.log(arr50);

// Muestro arr20 resultante
console.log("Array B combinado:");
console.log(arr20);

