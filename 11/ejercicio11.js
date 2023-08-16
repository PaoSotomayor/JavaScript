// Escribir una función que reciba un String y devuelva la palabra más larga.
alert('La palabra más larga es: ' + palabraMasLarga())

function palabraMasLarga() {
    let frase = prompt("Ingrese una frase").split(' ');
    let palabraLarga = '';

    for (let palabra of frase) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    return palabraLarga;
}