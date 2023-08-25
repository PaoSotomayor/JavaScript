// Suma de Dos Números: Escribe un programa que tome dos números como entrada y
// muestre la suma de ambos.

function mostrarSuma() {
    const numero1 = parseFloat(prompt('Ingresa el primer número:'));
    const numero2 = parseFloat(prompt('Ingresa el segundo número:'));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        const suma = numero1 + numero2;
        alert(`La suma de ${numero1} y ${numero2} es ${suma}`);
    } else {
        alert('Ingrese datos válidos!');
    }
}

mostrarSuma();
