const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const inputFullName = e.target.querySelector('#fullName');
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const nome = inputFullName.value.trim();
  const altura = Number(inputAltura.value);
  const peso = Number(inputPeso.value);

  if (!peso){
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura){
    setResultado('Altura inválida', false);
    return;
  }

  if (!nome){
    setResultado('Nome inválido', false);
    return;
  }

  if (nome.toLowerCase() === 'raissa cruz') {
    const raissaDiv = document.querySelector('#raissa-mode');
    document.body.innerHTML = ''; // limpa tudo
    document.body.appendChild(raissaDiv); // adiciona o efeito
    raissaDiv.style.display = 'flex';
    return;
  }

  const imc = getImc(peso, altura);
  const nivelIMC = getNivelImc(imc);
  const msg = `Olá, ${nome}, seu IMC é: ${imc} (${nivelIMC}).`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  return nivel[0];
}

function getImc(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  p.classList.add(isValid ? 'paragrafo-resultado' : 'bad');
  p.innerHTML = msg;
  resultado.appendChild(p);
}
