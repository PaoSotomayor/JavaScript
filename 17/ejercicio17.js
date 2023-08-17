// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el resultado

var arr = [10, 20, 30, 40, 50, 60];
arr.splice(-2);

// Convertio arrary a cadena de texto con join
var resultado = ' \n Array con los 2 últimos elementos eliminados: ' + arr.join(', ');

alert('Array original: 10, 20, 30 40, 60' + resultado);