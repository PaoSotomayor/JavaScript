// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato

let dato = prompt('Escriba un dato: ');


if (!isNaN(dato)) {
    dato = parseFloat(dato); //Convierto el dato en un número
} else if (dato.toLowerCase() === "true" || input.toLowerCase() === "false") {
    dato = dato.toLowerCase() === "true";
}

let tipoDato = () => alert(typeof dato);
tipoDato(dato);