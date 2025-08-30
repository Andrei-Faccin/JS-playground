let produtos = [
  {
    id: 1,
    nome: "Caixa Booster Black",
    categoria: "boosters",
    preco: 450,
    imagem:
      "https://target.scene7.com/is/image/Target/GUEST_4de139e9-4a1b-454b-a48c-d1d7bebead51",
    descricao: "Booster xxx",
  },
  // {
  //   id: 2,
  //   nome: "MacBook Air M2",
  //   categoria: "decksProntos",
  //   preco: 8999,
  //   precoOriginal: 10999,
  //   desconto: 18,
  //   imagem:
  //     "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  //   descricao: "Notebook Apple ultrafino e potente",
  // },
];

let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = "";
let todosBotoes = document.querySelectorAll(".botao-categorias");
let categoria = "todos";

function mostrarProdutos() {
  let htmlProdutos = "";

  produtos.forEach((prd) => {
    if (prd.nome.toLowerCase().includes(textoInput.toLowerCase())) {
      if (prd.categoria === categoria || categoria === "todos") {
        htmlProdutos += `
        <div class="cartao-produto">
            <img src="${prd.imagem}" class="imagem-produto">
            <div class="info-produto">
                <h3 class="nome-produto">${prd.nome}</h3>
                <p class="descricao-produto">${prd.descricao}</p>
                <p class="preco-produto">R$ ${prd.preco}</p>
                <button class="botao-produto">Ver Detalhe</button>
            </div>
        </div>
      `;
      }
    }
  });

  containerProdutos.innerHTML = htmlProdutos;
}

// Mostrar ao carregar
mostrarProdutos();

// Pesquisa
function pesquisar() {
  textoInput = inputPesquisa.value;
  mostrarProdutos();
}
inputPesquisa.addEventListener("input", pesquisar);

// Botões categorias
todosBotoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    categoria = botao.getAttribute("data-categorias");
    //console.log(categoria);
    todosBotoes.forEach((botao) => botao.classList.remove("ativo"));
    botao.classList.add("ativo");
    mostrarProdutos();
  });
});
// =====================
// Tema Pokémon TCG
// =====================

// Animação ao passar o mouse nos botões
todosBotoes.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 15px #ffcc01, 0 0 30px #ff1c1c";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});

// Botão "Ver Detalhe" com efeito glow Pokémon
function adicionarEfeitoBotoesProduto() {
  const botoesProdutos = document.querySelectorAll(".botao-produto");
  botoesProdutos.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 10px #ff1c1c, 0 0 20px #ffcc01";
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "none";
      btn.style.transform = "scale(1)";
    });
  });
}

// Chamar após mostrar produtos
adicionarEfeitoBotoesProduto();

// Garantir que efeitos sejam reaplicados após filtro/pesquisa
const observer = new MutationObserver(() => {
  adicionarEfeitoBotoesProduto();
});
observer.observe(containerProdutos, { childList: true });
