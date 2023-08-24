// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio.
// Nota: Cree dos métodos para calcular el área y el perímetro. El radio del círculo lo proporcionará el usuario.

let circulo = {
    radio: 0,
    area: 0.00,
    perimetro: 0.00
}

ingresarRadio = () => {
    circulo.radio = prompt('Indique el radio del círculo')
}
calcularArea = () => circulo.area = Math.PI * Math.pow(circulo.radio, 2);
calcularPerimetro = () => circulo.perimetro = 2 * Math.PI * circulo.radio;


ingresarRadio();
calcularArea();
calcularPerimetro();
alert(JSON.stringify(circulo));

// alert("El área del círculo es: " + circulo.area.toFixed(2) +
//     " y el perímetro  es: " + circulo.perimetro.toFixed(2));


