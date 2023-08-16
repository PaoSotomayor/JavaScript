//Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el programa se debe 
//mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos.

let num, suma, min, max = 0;
let promedio;
let contador = 1;

num = Number(prompt('Ingrese un número')); //Number convierte cadenas numericas a numeros
min = num;
max = num;
suma = num;

while (num != 0) {
    num = Number(prompt('Ingrese un número (0 para finalizar el programa)'));
    suma += num;
    contador++;
    (num > max) ? max = num : (num < min && num != 0) ? min = num : (num); // if ternario
}

promedio = suma / contador;

if (max != 0 && min != 0 && promedio != 0) {
    alert(` Cantidad de números ingresados: ${contador}
    - El número máximo es: ${max}
    - El número mínimo es: ${min}
    - El promedio es: ${promedio}
   `)

} else {
    alert("No se ha realizado ningun cálculo porque ha digitado cero antes de empezar!!");
}
