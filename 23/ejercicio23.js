// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo amarillo, por ejemplo)

document.addEventListener('DOMContentLoaded', function () {
    let parrafo = document.getElementById('parrafo');
    let palabras = parrafo.textContent.split(' ');

    let palabrasLargas = palabras.filter(palabra => palabra.length > 8);

    let contenidoResaltado = palabras.map(palabra =>
        palabrasLargas.includes(palabra) ? `<span class="highlight">${palabra}</span>` : palabra
    );

    parrafo.innerHTML = contenidoResaltado.join(' ');
});