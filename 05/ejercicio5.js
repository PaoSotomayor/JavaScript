// Construir un programa que simule un menú de opciones para realizar las cuatro operaciones aritméticas básicas
// (suma, resta, multiplicación y división) con dos valores numéricos enteros. El usuario, además, debe especificar 
// la operación con el primer carácter de la operación que desea realizar:
//  ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

var operaciones = prompt('Ingrese la letra correspondiente a la operación que desea realizar (S/R/M/D').toUpperCase();
var n1, n2 = 0;

switch (operaciones) {
    case 'S':
        n1 = parseInt(prompt('Ingrese el primer número a sumar'));
        n2 = parseInt(prompt('Ingrese el segundo número'));
        alert('La suma entre los dos números es: ' + (n1 + n2));
        break;
    case 'R':
        n1 = parseInt(prompt('Ingrese el primer número a restar'));
        n2 = parseInt(prompt('Ingrese el segundo número'));
        alert('La resta entre los dos números es: ' + (n1 - n2));
        break;
    case 'M':
        n1 = parseInt(prompt('Ingrese el primer número a multiplicar'));
        n2 = parseInt(prompt('Ingrese el segundo número'));
        alert('La multiplicación entre los dos números es: ' + (n1 * n2));
        break;
    case 'D':
        do {
            n1 = parseInt(prompt('Ingrese el primer número a dividir'));
            n2 = parseInt(prompt('Ingrese el segundo número'));
            alert('La división entre los dos números es: ' + (n1 / n2));
            const maxNumber = Math.pow(10, 1000);

            if (maxNumber === Infinity) {
                alert('Error, el segundo número no puede ser igual o menor a 0! :s');

            }

        } while (n2 <= 0);


        break;
    default:
        alert("Opción inválida!");
        break;
}
