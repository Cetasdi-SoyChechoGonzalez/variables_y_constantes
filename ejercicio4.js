/* Declare y asigne las variables `nombre`, `anioActual` y `anioNaciomiento`

 El programa debe imprimir su nombre y edad actual en la consola con la frase "Hola Sergio, Tienes X años". Por ejemplo, asumiendo que el año actual es 2022 y el usuario ingresa 2000, el programa debe imprimir en la consola:

 `Hola Sergio Tienes 22 años`

 Por el momento no debemos preocuparnos si realmente no nos entrega la edad real ya que más adelante seremos mucho más especificos con los meses para así obtener la edad real. */

let nombre = "Sergio";
let anioActual = 2022;
let anioNacimiento = 1995;

let edad = anioActual - anioNacimiento;

console.log(`Hola ${nombre}, tienes ${edad} años`);
