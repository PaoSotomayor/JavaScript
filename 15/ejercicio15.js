// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio.
// Nota: Cree dos métodos para calcular el área y el perímetro. El radio del círculo lo proporcionará el usuario.

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea = () => Math.PI * this.radio * this.radio;
    calcularPerimetro = () => 2 * Math.PI * this.radio;
}

let radio = Number(prompt("Ingrese el radio del círculo: "));

// Crear una instancia de la clase Circulo
let circulo = new Circulo(radio);

// Calcular el área y el perímetro utilizando los métodos
let area = circulo.calcularArea();
let perimetro = circulo.calcularPerimetro();

alert("El área del círculo es: " + area.toFixed(2) +
    " y el perímetro  es: " + perimetro.toFixed(2));
