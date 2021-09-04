/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la 
cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

`peso / altura^2` = `peso / altura al cuadrado`

Escribe un programa que le pida al usuario su peso en Kg y su altura en metros para calcular su IMC e imprima la frase 
"Tu IMC es X".

Por ejemplo, si el usuario ingresa 80Kg de peso y 175cm de altura el programa debe imprimir en la consola la frase
 "Tu IMC es Tu IMC es: 26.122448979591837". */

let peso = parseInt(prompt("Ingrese su peso en Kg"));
let altura = parseFloat(prompt("Ingrese su altura en metros"));

let imc = peso / (altura * altura);

console.log("Tu IMC es: " + imc);
