// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para 
// obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

let array = [true, 5, false, "hola", "adios", 2, "desoxirribonucleico"];
let palabras = array.filter((dato) => typeof dato === "string")
let mayor = (palabras[0].length > palabras[1].length) ? palabras[0] :
    (palabras[1].length > palabras[2].length) ? palabras[1] : palabras[2]
alert('La palabra más larga es: ' + mayor);


let resultadoTrue = array[0] || array[2]; // true || false -> true
let resultadoFalse = array[0] && array[2]; // true && false -> false

alert("Resultado true:", resultadoTrue);
alert("Resultado false:", resultadoFalse);

let numero1 = array[1];
let numero2 = array[5];

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;
alert(`Suma: ${suma}
Resta: ${resta}
Multiplicación ${multiplicacion}
División: ${division}
Mod: ${modulo}`
)

