// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el funcionamiento de la función Substring().

let frase = prompt('Ingrese una frase').split('');
frase;

let fraseEspacio = '';
for (let letra of frase) {
    fraseEspacio += letra + ' ';
}
alert(`La frase con espacios es: 
 ${fraseEspacio}
 :)`)

