/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"


const resultado = "Olá" && 42;
console.log(resultado); // 42


const resultado = false && true;
console.log(resultado); // false

const resultado = "Texto" || false;
console.log(resultado); // "Texto"

const resultado = 0 || null;
console.log(resultado); // null

const resultado = false || (true && "Valor");
console.log(resultado); // "Valor"
*/
