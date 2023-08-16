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
