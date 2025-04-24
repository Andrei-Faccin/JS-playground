// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario'); // seleciona o formulário pelo ID

form.addEventListener('submit', pokeball);

function pokeball(event){
    event.preventDefault();
    console.log('AICIPIKAA');

    const inputFullName = event.target.querySelector('#fullName'); // seleciona o campo de nome completo
    const inputPeso = event.target.querySelector('#peso'); // seleciona o campo de peso
    const inputAltura = event.target.querySelector('#altura'); // seleciona o campo de altura

    const nome = inputFullName.value; // pega o valor do campo nome
    const altura = Number(inputAltura.value); // converte o valor da altura para número
    const peso = Number(inputPeso.value); // converte o valor do peso para número

    console.log(nome, altura, peso); // exibe os valores no console

    if (!peso){ // se o peso for inválido (0 ou NaN)
        setResultado('Peso inválido', false); // mostra mensagem de erro
        return; // interrompe a função
    }

    if (!altura){ // se a altura for inválida
        setResultado('Altura inválida', false); // mostra mensagem de erro
        return; // interrompe a função
    }

    if (!nome){ // se o nome estiver vazio
        setResultado('Nome inválido', false); // mostra mensagem de erro
        return; // interrompe a função
    }

    const imc = getImc(peso, altura, nome); // calcula o IMC
    const nivelIMC = getNivelImc(imc); // obtém o nível correspondente ao IMC

    const msg = `Olá, ${nome}, seu IMC é: ${imc} (${nivelIMC}).`; // monta a mensagem final
    
    //console.log(imc); // linha comentada que poderia exibir o IMC

    setResultado(msg, true); // exibe a mensagem final na tela com sucesso

}

function getNivelImc (imc){ // função que retorna o nível do IMC com base no valor
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 2', 'Obesidade grau 3']; // níveis de IMC

    if (imc >= 39.9) return nivel[5]; // grau 2 (duplicado por erro)
    if (imc >= 34.9) return nivel[4]; // grau 2
    if (imc >= 29.9) return nivel[3]; // grau 1
    if (imc >= 24.9) return nivel[2]; // sobrepeso
    if (imc >= 18.5) return nivel[1]; // peso normal
    if (imc < 18.5) return nivel[0]; // abaixo do peso
}

function getImc (peso, altura, nome){ // calcula o IMC com base no peso e altura
    const imc = peso / altura ** 2; // fórmula do IMC
    return imc.toFixed(2); // retorna o IMC com 2 casas decimais
}

function criaP () {
    const p = document.createElement('p'); // cria um paragrafo
    return p; // retorna o parágrafo
}

function setResultado (msg, isValid){ // exibe o resultado na tela, com estilo baseado em validação
    const resultado = document.querySelector('#resultado'); // seleciona o elemento onde será exibido o resultado
    resultado.innerHTML = ''; // limpa o conteúdo anterior

    const p = criaP(); // cria um novo parágrafo

    if (isValid){ // se os dados forem válidos
        p.classList.add('paragrafo-resultado'); // adiciona a classe de sucesso
    }else{
        p.classList.add('bad') // adiciona a classe de erro
    }

    p.innerHTML = msg; // insere a mensagem no parágrafo
    resultado.appendChild(p); // adiciona o parágrafo ao elemento resultado
}
