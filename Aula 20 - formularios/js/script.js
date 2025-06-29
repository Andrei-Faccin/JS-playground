// Função principal que encapsula todo o escopo para evitar poluir o escopo global
function meuEscopo (){

    // Seleciona o formulário com a classe .form
    const form = document.querySelector('.form');

    // Seleciona o elemento com a classe .resultado para mostrar os resultados
    const resultado = document.querySelector('.resultado');

    // Cria um array vazio que irá armazenar os dados das pessoas
    const pessoas = [];

    // Função que trata o evento de envio do formulário
    function recebeEventoForm (evento){
        // Impede o comportamento padrão do formulário (recarregar a página)
        evento.preventDefault();

        // Seleciona os campos de input dentro do formulário
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Junta o nome e sobrenome, removendo espaços extras nas pontas
        const nomeCompleto = `${nome.value.trim()} ${sobrenome.value.trim()}`;

        // Adiciona os dados inseridos no array 'pessoas' como um objeto
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        // Exibe no console o array atualizado de pessoas
        console.log(pessoas);

        // Adiciona os dados ao HTML da div .resultado (sem apagar o que já estava)
        resultado.innerHTML += `<h3><p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

        // Condição especial: se o nome completo (em minúsculas) for igual a 'xxxx'
        if (nomeCompleto.toLowerCase() === 'xxxx') { // nome da princesa
            // Mostra um alerta personalizado
            alert('A princesa mais linda aparecer <3 UUUUAAAAUUU');

            // Cria uma nova imagem
            const img = document.createElement('img');

            // Define a origem (URL) da imagem
            img.src = 'xxxxx'; // Você pode mudar essa URL se quiser

            // Define o texto alternativo da imagem
            img.alt = 'xxxx';

            // Define o estilo da imagem diretamente pelo JavaScript
            img.style.maxWidth = '300px';      // Largura máxima de 300px
            img.style.display = 'block';       // Faz a imagem ocupar toda a linha
            img.style.marginTop = '20px';      // Espaço acima da imagem

            // Adiciona a imagem ao final do <body>
            document.body.appendChild(img);
        }
    }

    // Adiciona um ouvinte de evento ao formulário que chama a função quando enviado
    form.addEventListener('submit', recebeEventoForm);
}

// Chama a função principal para iniciar o script
meuEscopo();
