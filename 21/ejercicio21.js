// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.


const nombre = prompt('Ingresa el nombre:');
const edad = parseInt(prompt('Ingresa la edad:'));

let sexo = prompt("Ingresa el sexo ('H' hombre, 'M' mujer, 'O' otro):").toUpperCase();

while (sexo !== 'H' && sexo !== 'M' && sexo !== 'O') {
    alert('Opción de sexo no válida. Por favor, ingresa "H" para hombre, "M" para mujer o "O" para otro.');
    sexo = prompt("Ingresa el sexo ('H' para hombre, 'M' para mujer, 'O' para otro):");
    sexo = sexo.toUpperCase();
}

const peso = parseFloat(prompt('Ingresa el peso:'));
const altura = parseFloat(prompt('Ingresa la altura:'));

const persona = {

    nombre: nombre,
    edad: edad,
    sexo: sexo,
    peso: peso,
    altura: altura,
}
const propiedadesPersona = Object.values(persona);

console.log(propiedadesPersona);
alert('Propiedades de la persona: ' + propiedadesPersona.join(', '));
