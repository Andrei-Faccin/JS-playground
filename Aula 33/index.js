const pessoa = {
  nome: 'Andrei',
  sobrenome: 'Faccin',
  idade: 27,
  endereco: {
    rua: 'Av Brasil',
    numero: 222
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);