// Verificación de Número Par: Escribe un programa que verifique si un número ingresado
// por el usuario es par o impar.

let numero = parseInt(prompt('Ingrese un número'));
if (numero % 2 === 0) {
    alert(numero + ' es un número par');
} else {
    alert(numero + ' es número impar');
}