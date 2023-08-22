// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un circulo y
// lo muestre en el HTML.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculo');
    const resultadoElement = document.getElementById('resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const diametro = parseFloat(form.diametro.value);
        const radio = diametro / 2;

        resultadoElement.textContent = `El radio del círculo es: ${radio}`;
    });
});

