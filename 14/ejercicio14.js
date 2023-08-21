// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar 
// mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.

alert('Ingrese los datos del libro' + cargarLibro())
mostrarLibro();

const Libro = {
    ISBN: 0,
    Titulo: ' ',
    Autor: ' ',
    NumPag: 0,
}
var libro1 = new Libro();
function cargarLibro() {
    ISBN = prompt('Ingrese el número de ISBN');
    Titulo = prompt('Ingrese el título');
    Autor = prompt('Ingrese el Autor');
    NumPag = prompt('Ingrese el Número de Páginas');
}

function mostrarLibro() {
    alert(`ISBN: ${ISBN} 
   Título:  ${Titulo} 
   Autor:  ${Autor} 
   Número de páginas: ${NumPag}`)
}

