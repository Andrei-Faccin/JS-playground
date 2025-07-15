// Nullish coalescing operrator

// const iidade = null;
// document.body.innerText = "A sua idade é: " + (iidade ?? "Não informado");

// objetos

// const user = {
//   nome: "Andrei",
//   idade: 27,
//   endereco: {
//     rua: "Rua teste",
//     numero: 123,
//   },
// };

// Desestruturação

// function mostraIdade({ idade }) {
//   return idade;
// }

// const { endereco, idade: age } = user;

// document.body.innerText = JSON.stringify({ endereco, age, nome });

// Rest operator (operador de resto)

//const { name, ...rest } = user;

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const [first, , third, ...rest] = array;

//document.body.innerText = JSON.stringify({ first, third, rest });

// Optinao chaining

// const usuario = {
//   nome: "Andrei",
//   idade: 27,
//   endereco: {
//     rua: "Rua teste",
//     numero: 123,
//     zip: {
//       code: "846546",
//       city: "Parobret",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };
//const key = "nome";

//document.body.innerText = user[];

//document.body.innerText = user.endereco?.zip.code ?? "Não Informado";

// Metodos de Array

const array = [1, 2, 3, 4, 5];

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach((item) => {
//   document.body.innerText += item;
// });

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
// });

// MAP, FILTER, EVERY, SOME, FIND, findIndex, reduce

// filter

// const novoArray = array
//   .filter((item) => item % 2 === 0)
//   .map((item) => item * 10);

// document.body.innerText = JSON.stringify(novoArray);

// EVERY - retorna um booblean true ou false
// so retorna true se todos os itens satisfazerem a uma condição

// const todosItensSaoNumeros = array.every((item) => typeof item == "number");

// document.body.innerText = JSON.stringify(todosItensSaoNumeros);

// Some - pelo menos um item de dentro do array é true

// const peloMenosUmItemEUmNumero = array.some((item) => {
//   return typeof item == "number";
// });

// document.body.innerText = JSON.stringify(peloMenosUmItemEUmNumero);

// FIND retorna o primeiro resultado da condição  E FINDINDEX mesma coisa q o find so q retorna o index(posicao)

// const par = array.find((item) => item % 2 === 0);
// const indexPar = array.findIndex((item) => item % 2 === 0);

// document.body.innerText = JSON.stringify({ par, indexPar });

// REDUCE

// const soma = array.reduce((acc, item) => {
//   //document.body.innerText += acc + "," + item + "----";
//   return acc + item;
// }, 0);

// document.body.innerText = JSON.stringify(soma);

// template literals

// const name = "Andrei";
// const message = `Bem-Vindo, ${name ? name : "Visitante"}`;

// document.body.innerText = message;

// Promises

fetch("https://api.hitgub.com/users/andrei-faccin")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  //   .then((response) => {
  //     response.json().then((body) => {
  //       console.log(body);
  //     });
  //   })
  .catcher((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Sempre cai aqui");
  });

async function buscaDadosNoGithub() {
  try {
    const response = await fetch("https://api.hitgub.com/users/andrei-faccin");
    const body = await response.json();
    console.log(body);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Sempre cai aqui");
  }
}

buscaDadosNoGithub();
