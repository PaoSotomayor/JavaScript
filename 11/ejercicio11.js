// Escribir una función que reciba un String y devuelva la palabra más larga.

let frase = prompt("Ingrese una frase: ");
let letra = "";
let palabraLarga = () => {
    frase.split(" ").forEach(i => {
        letra = (i.length > letra.length) ? i : letra;
    });
    alert(letra);
}
palabraLarga(frase);