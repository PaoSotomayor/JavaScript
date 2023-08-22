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

function getFormValores() {

    const datos = document.getElementById('form1');
    console.log('Datos' + '\nNombre: ' + (datos[0].value) + '\nApellido: ' + (datos[1].value));
    alert('Datos enviados')
};