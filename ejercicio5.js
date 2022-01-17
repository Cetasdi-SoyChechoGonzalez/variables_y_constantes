/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

`peso / altura**2` = `peso / altura al cuadrado`

Declara y asigna las variables `peso`y `altura` para calcular el IMC e imprima la frase "Tu IMC es X".

Por ejemplo, si el usuario ingresa 65kg de peso y 1.80m de altura el programa debe imprimir en la consola la frase "Tu IMC es 20.061728395061728". */

let peso = 65;
let altura = 1.8;

let imc = peso / altura ** 2;
console.log(`Tu IMC es ${imc}`);
