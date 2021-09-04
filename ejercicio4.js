/* Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase: 
"Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, 
el programa debe imprimir en la consola: */

let nombre = prompt("¿Cual es tu nombre?: ");
let anio_actual = parseInt(prompt("Ingrese el año actual: "));
let anio_nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));

let edadActual = anio_actual - anio_nacimiento;

console.log("Hola " + nombre + ", tienes " + edadActual + " años");
document.write(nombre);
