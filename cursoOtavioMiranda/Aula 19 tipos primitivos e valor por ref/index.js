/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
 * 
 * refeência (mutável) - array, object, function - passados  por refeência
 

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Andrei');
console.log(c);
*/
const pessoa1 = {
    nome: 'Andrei',
    sobrenome: 'Faccin'
};
const pessoa2 = pessoa1;

pessoa2.nome = 'Raissa'

console.log(pessoa1);
console.log(pessoa2);




