// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo amarillo, por ejemplo)

document.addEventListener('DOMContentLoaded', function () {
    let parrafo = document.getElementById('parrafo');
    let palabras = parrafo.textContent.split(' ');

    let palabrasLargas = palabras.filter(palabra => palabra.length > 8);

    let contenidoResaltado = palabras.map(palabra =>
        palabrasLargas.includes(palabra) ? `<span style = 'background:yellow' class="highlight">${palabra}</span>` : palabra
    );

    parrafo.innerHTML = contenidoResaltado.join(' ');
});

//otra forma1
// document.getElementsByTagName("p")[1].innerHTML = document
//   .getElementsByTagName("p")[1]
//   .innerText.split(" ")
//   .map((palabra) =>
//     palabra.length > 8 ? `<span class = "yb"> ${palabra} </span>` : palabra
//   )
//   .join(" ");

// var css = document.createElement("style");
// css.innerHTML = ".yb {background-color: yellow;}";
// document.getElementsByTagName("head")[0].appendChild(css);

//otra forma2
// let parrafos = document.getElementsByTagName("p");

// for (const element of parrafos) {
//   element.innerHTML = element.innerText
//     .split(" ")
//     .map((palabra) => //Lambda o flecha
//       palabra.length > 8 ? `<span class = "yb">${palabra}</span>` : palabra
//     )
//     .join(" ");
// }

// var css = document.createElement("style");
// css.innerHTML = ".yb {background-color: yellow;}";
// document.getElementsByTagName("head")[0].appendChild(css);