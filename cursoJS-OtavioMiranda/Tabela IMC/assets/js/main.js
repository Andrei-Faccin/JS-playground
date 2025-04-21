// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault(); // 
    const inputPeso = e.target.querySelector('#peso');
});

function criaP () {
    const p = document.createElement('p'); // cria um paragrafo
    return p;

}

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    //resultado.innerHTML = `<p>${msg}</p>`;

    const p = criaP();
}
