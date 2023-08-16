// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y
// calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se 
// utilizan las siguientes fórmulas:
// area = PI * radio2 perimetro = 2 * PI * radio

let radio = prompt('Ingrese el valor del radio de la circunferencia')
const pi = 3.1416;
let perimetro = (2 * pi * radio);
let area = pi * Math.pow(radio, 2);
let resultado = `Para un círculo de: ${radio} cm de radio
el perímetro es = ${perimetro} cm
y el área es = ${area} cm`

console.log(resultado);