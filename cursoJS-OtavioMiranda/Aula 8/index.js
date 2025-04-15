/**
 * Andrei Faccin tem 27 anos, pesa 100 KG
 * tem 1.75 de altura e seu IMC é de .....
 * Andrei nasceu em 1997
 */

const nome = 'Andrei';
const sobrenome = 'Faccin';
const idade = 27;
const peso = 100;
const altura = 1.75
let imc = peso / (altura*altura); // peso / (altura*altura)
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura`); // melhor maneira
console.log('seu IMC é de:',imc);
console.log(nome, sobrenome, 'nasceu em:', anoNascimento);