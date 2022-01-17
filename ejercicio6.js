/* ¿Cuál de los dos siguientes bloques produce un error y por qué? 
Nota: Puede inhabilitar un bloque con un comentario de bloque(múltiples líneas) para analizar cada uno */

//BLOQUE A
var numeroParaAnalizar = 5;
var numeroParaAnalizar = 20;
console.log(numeroParaAnalizar);

//BLOQUE B
/* let numeroParaAnalizar = 5;
let numeroParaAnalizar = 20;
console.log(numeroParaAnalizar); */
// el bloque produce un error porque la variable numeroParaAnalizar ya fue declarada y no se puede redeclarar un valor a una variable ya declarada con let.
