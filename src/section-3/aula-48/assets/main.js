const h1 = document.querySelector('.container h1')
const data1 = new Date()

function getDia(diaSemana) {
  const diasSemana = ['domingo', 'Segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  return diasSemana[diaSemana]
}

function getMes(mesNumero) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'augusto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return meses[mesNumero]
}

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`
}

function getFormatted(data1) {
  const dia = getDia(data1.getDay())
  const mes = getMes(data1.getMonth())

  return (
    `${dia}, ${data1.getDate()} ${mes} ` +
    `de ${data1.getFullYear()} ` +
    `${zeroLeft(data1.getHours())}: ${zeroLeft(data1.getMinutes())} `
  )
}

h1.innerHTML = getFormatted(data1)



// outra maneira de fazer 
const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full',
timeStyle: 'short',})