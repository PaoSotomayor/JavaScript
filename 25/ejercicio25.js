// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Obtener nombre y apellido de form </title>
// </head><body>
// <form id="form1" onsubmit="getFormValores()">
// Nombre: <input type="text" name="nombre" value="David"><br> Apellido: <input type="text" name="apellido" value="Beckham"><br> <input type="submit" value="Submit">
// </form>
// </body>
// </html>

var contador = 1;

function getFormValores() {
    event.preventDefault();
    var nombre = document.querySelector('input[name="nombre"]').value;
    var apellido = document.querySelector('input[name="apellido"]').value;
    console.log("Dato " + contador + ": \nNombre:", nombre, "\nApellido:", apellido);
    contador++;
}

  //otra forma
// function getFormValores() {

//     const datos = document.getElementById('form1');
//     console.log('Los datos enviados son:' + '\nNombre: ' + (datos[0].value) + '\nApellido: ' + (datos[1].value));
//     alert('Datos enviados')
// };