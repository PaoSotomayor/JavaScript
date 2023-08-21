// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo amarillo, por ejemplo)

document.addEventListener('DOMContentLoaded', function () {
    const parrafo = document.getElementById('parrafo');
    const palabras = parrafo.textContent.split(' ');

    const palabrasLargas = palabras.filter(palabra => palabra.length > 8);

    const contenidoResaltado = palabras.map(palabra =>
        palabrasLargas.includes(palabra) ? `<span class="highlight">${palabra}</span>` : palabra
    );

    parrafo.innerHTML = contenidoResaltado.join(' ');
});