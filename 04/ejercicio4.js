// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario ingresa alguno
// de esos dos caracteres se deberá de imprimir un mensaje por pantalla que diga “CORRECTO”, en caso contrario, se 
// deberá imprimir “INCORRECTO”.

do {
    var respuesta = prompt('Debe ingresar N o S').toUpperCase();
    if (respuesta == 'N' || respuesta == 'S') {
        console.log('Correcto :)');
    } else {
        console.log('Incorrecto :(');
    }
} while (respuesta != 'S' && respuesta != 'N');
