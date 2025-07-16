let listaDeTarefas = [];
let index = 0;

document
  .getElementById("crud-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    salvarDados();
  });

function salvarDados() {
  let entrada = document.getElementById("entrada").value;

  let entradaObj = {
    id: index,
    texto: entrada,
  };

  index++;
  listaDeTarefas.push(entradaObj);
  mostrar();
  document.getElementById("entrada").value = "";
}

function mostrar() {
  let ul = document.getElementById("resultados");
  let html = "";

  listaDeTarefas.forEach((elemento) => {
    html += `<li>
      <span>${elemento.texto}</span>
      <div class="buttons">
        <button class="btn edit" onclick="editar(${elemento.id})">Editar</button>
        <button class="btn delete" onclick="deletar(${elemento.id})">Deletar</button>
      </div>
    </li>`;
  });

  ul.innerHTML = html;
}

function editar(id) {
  let html = `
    <input type="text" id="textoParaEditar" placeholder="Novo texto">
    <button class="btn save" onclick="editarDados(${id})">Salvar edição</button>
  `;
  document.getElementById("editar").innerHTML = html;
}

function editarDados(id) {
  let textoParaEditar = document.getElementById("textoParaEditar").value;
  let resultado = listaDeTarefas.find((obj) => obj.id === id);
  resultado.texto = textoParaEditar;
  mostrar();
  document.getElementById("editar").innerHTML = "";
}

function deletar(id) {
  listaDeTarefas = listaDeTarefas.filter((obj) => obj.id !== id);
  mostrar();
}
