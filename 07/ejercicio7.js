/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
solicite números al usuario hasta que la suma de los números introducidos 
supere el límite inicial*/

let limite = prompt('Ingrese un número (número límite')
let num = 0;

do {
    num += parseInt(prompt('Ingrese un número: '));
    alert('El límite actual es: ' + num)
} while (num <= limite);
alert('Límite superado! :)')