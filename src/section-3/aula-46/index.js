// ====================== Date ==========================//

const tresH = 60 * 60 * 3 * 1000; // + 3 horas
const umDia = 60 * 60 * 24 * 1000; // + 1 dia
const dataUnix = new Date(0 + tresH + umDia); // 01/01/1970 -> marco zero unix timestamp


//const data = new Date(2022, 5, 28, 11, 40, 10) ano, mes, dia, hora, minuto, segundos
// 0 é janeiro, 1 fevereiro, etc... 0-11 (11 é dezembro)

const data = new Date(1656428564652) 
console.log(data.toString());

console.log('Dia', data.getDate()); // vai obter o dia exato
console.log('Mês', data.getMonth() + 1); // vai obter o mês exato
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milésimos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado

// console.log(Date.now()); vai pegar os milésimos de segundo contados a partir do marco 0

console.log('============================')


function zeroLeft(num){
  return num >= 10 ? num : `0${num}`;
}

function formataData(dataAtual){
  const dia = zeroLeft(dataAtual.getDay());
  const mes = zeroLeft(dataAtual.getMonth() + 1);
  const ano = zeroLeft(dataAtual.getFullYear());
  const hora = zeroLeft(dataAtual.getHours());
  const min = zeroLeft(dataAtual.getMinutes());
  const sec = zeroLeft(dataAtual.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil)