// Generador de Contraseñas: Crea una función que genere contraseñas aleatorias
// con letras, números y caracteres especiales.


const generarContrasenaAleatoria = (longitud) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contrasena = '';

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indice);
    }

    return contrasena;
};

var longitudContrasena = parseInt(prompt("Ingresa la longitud deseada para la contraseña:"));

// Generar y mostrar la contraseña aleatoria
if (isNaN(longitudContrasena) || longitudContrasena <= 0) {
    alert("Por favor, ingresa una longitud válida para la contraseña.");
} else {
    const contrasenaGenerada = generarContrasenaAleatoria(longitudContrasena);
    alert(`Contraseña generada: ${contrasenaGenerada}`);
}


