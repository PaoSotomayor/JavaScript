// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro),
// peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

alert('Pulse OK para ver los datos de Pepito: ')
const persona = {
    nombre: 'Pepito Alias Juárez',
    edad: 20,
    sexo: 'H',
    peso: 65.8,
    altura: 1.86,

}
persona.ciudad = 'BS. AS.'
alert(`Nombre: ${persona.nombre}
Edad: ${persona.edad}
Sexo: ${persona.sexo}
Altura: ${persona.altura}
Peso: ${persona.peso}
Ciudad: ${persona.ciudad}`)

//otra forma:
// function Persona(nombre, edad, sexo, peso, altura) {
//     this.Nombre = nombre;
//     this.Edad = edad;
//     this.Sexo = sexo;
//     this.Peso = peso;
//     this.Altura = altura;
// }
// let p1 = new Persona();
// p1.Nombre = prompt("Ingrese su nombre");
// p1.Edad = parseInt(prompt("Ingresa tu edad"));
// p1.Sexo = prompt(`Ingresa tu sexo
// H = Hombre
// M = Mujer
// O = Otro`);
// p1.Peso = parseInt(prompt("Ingresa tu peso"));
// p1.Altura = parseInt(prompt("Ingresa tu altura en centimetros"));
// Object.keys(p1).forEach(function(prop) {
//     document.write(prop + ": " + p1[prop] + "<br>"); 
// });
