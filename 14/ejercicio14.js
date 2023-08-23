// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar 
// mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.
let libro = { isbn: 0, titulo: "", autor: "", numPage: 0 };
//let libroM={};
function crearLibro() {
    libro.isbn = prompt("Ingrese el isbn del libro:");
    libro.titulo = prompt("Ingrese el titulo del autor:");
    libro.autor = prompt("Ingrese el autor del libro:");
    libro.numPage = prompt("Ingrese el número de páginas del libro:");
}

function mostrarLibro() {

    alert(JSON.stringify(libro));
}

crearLibro();
mostrarLibro();
