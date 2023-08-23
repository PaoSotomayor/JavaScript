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

//con map
// let plarga = "";
// let palabra = prompt("Ingrese una frase: ").split(' ').map(function (elemento){
   
//     if (elemento.length>plarga.length) {
//         plarga = elemento;
//     }

// });
// alert(plarga);
