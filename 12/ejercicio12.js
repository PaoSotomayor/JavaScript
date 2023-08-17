// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato

let TipoDato = (dato) => {
    return typeof dato;
};

let input = prompt("Ingresa un dato");
let dato;

if (!isNaN(input)) {
    dato = parseFloat(input); //Convierto el dato en un número
} else if (input.toLowerCase() === "true" || input.toLowerCase() === "false") {
    dato = input.toLowerCase() === "true";
} else {
    dato = input;
}

alert("El tipo de dato es: " + TipoDato(dato));