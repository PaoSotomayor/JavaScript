// Factorial: Desarrolla una función que calcule el factorial de un número dado.


const calcularFactorial = numero => {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
};
// Si el número es 0 o 1, el factorial es 1. 
// Para otros números, se llama a la función recursivamente para calcular el factorial

let numero = parseInt(prompt("Ingresa un número:"));

if (numero < 0) {
    alert("No se puede calcular el factorial de un número negativo.");
} else {
    const factorial = calcularFactorial(numero);
    alert(`El factorial de ${numero} es ${factorial}`);
}
