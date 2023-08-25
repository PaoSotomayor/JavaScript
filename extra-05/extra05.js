// Validación de Palíndromo: Crea una función que determine si una palabra es un palíndromo
// (se lee igual de izquierda a derecha que de derecha a izquierda).
const palindromo = palabra => {
    palabra = palabra.toLowerCase();
    const reves = palabra.split('').reverse().join('');
    return palabra === reves;
};

let palabraIng = prompt('Ingrese una palabra y averiguaremos si es palíndrome');
if (palindromo(palabraIng)) {
    alert(`${palabraIng} es palíndromo`);

} else {
    alert(`${palabraIng} no es palíndromo`);
}