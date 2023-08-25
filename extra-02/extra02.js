// Cálculo de Promedio: Crea un programa que calcule el promedio de tres números
// ingresados por el usuario.
function calcularPromedio() {
    const numero1 = parseFloat(prompt('Ingresa el primer número:'));
    const numero2 = parseFloat(prompt('Ingresa el segundo número:'));
    const numero3 = parseFloat(prompt('Ingresa el tercer número:'));

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        const promedio = (numero1 + numero2 + numero3) / 3;
        alert(`El promedio de los números ingresados es ${promedio}`);
    } else {
        alert('Ingrese datos válidos!');
    }
}
calcularPromedio();