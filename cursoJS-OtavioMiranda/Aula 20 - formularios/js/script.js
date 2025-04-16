function meuEscopo (){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const nomeCompleto = `${nome.value.trim()} ${sobrenome.value.trim()}`;

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML= [];
        resultado.innerHTML += `<h3><p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

        // Condição especial para Raissa Cruz
        if (nomeCompleto.toLowerCase() === 'raissa cruz') {
            alert('A princesa mais linda aparecer <3 UUUUAAAAUUU');

            // Criar imagem e adicionar no body
            const img = document.createElement('img');
            img.src = 'C:/Users/aaaa/Desktop/Ambientação Java e afins/Projetos JS/Aula 20 - formularios/img/euiela.jpg'; // Você pode mudar essa URL se quiser
            img.alt = 'Rainha Raissa';
            img.style.maxWidth = '300px';
            img.style.display = 'block';
            img.style.marginTop = '20px';

            document.body.appendChild(img);
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
