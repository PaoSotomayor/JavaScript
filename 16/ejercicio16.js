// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios y los muestre por pantalla.

// Función flecha para generar un número aleatorio entre un mínimo y un máximo
const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función flecha para llenar un vector con valores aleatorios
const llenarVectorAleatorio = (vector, longitud, min, max) => {
    for (let i = 0; i < longitud; i++) {
        vector.push(generarNumeroAleatorio(min, max));
    }
};

// Crear dos vectores vacíos
const vector1 = [];
const vector2 = [];

// Llenar los vectores con valores aleatorios
llenarVectorAleatorio(vector1, 5, 1, 100); // Llenar con valores entre 1 y 100
llenarVectorAleatorio(vector2, 5, 10, 200); // Llenar con valores entre 10 y 200

// Mostrar los vectores por pantalla
console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);