const data = new Date(); // ano, mes, dia, hora, minuts, segundos, milesimos de segundo
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // MÊS COMEÇA DO ZERO
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semnana', data.getDay()); // 0 - DOMINGO, 6 - SÁBADO
console.log(data.toString());

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const dataBrasil = formataData(data);
console.log(dataBrasil);
