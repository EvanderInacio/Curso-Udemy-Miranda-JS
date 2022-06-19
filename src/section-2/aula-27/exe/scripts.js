
const numero = Number(prompt('Digite seu numero: '))
const numeroTitle = document.getElementById('numero-title') 
const numeroText = document.getElementById('numero-text')
const inteiro = document.getElementById('inteiro')
const raiz = document.getElementById('raiz')
const nan = document.getElementById('numero-nan')
const arredondaCima = document.getElementById('arredondaCima')
const arredondaBaixo = document.getElementById('arredondaBaixo')
const duasCasas = document.getElementById('duasCasas')

numeroTitle.innerHTML = numero;
numeroText.innerHTML = `<p>Seu numero + 2 é igual a: <strong>${numero + 2}</strong>.</p>`;
inteiro.innerHTML = `<p> <strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;

raiz.innerHTML = `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong> </p>`;
nan.innerHTML = `<p> É NaN: <strong>${Number.isNaN(numero)}</strong> </p>`;
arredondaCima.innerHTML = `<p> Arredondando para cima: <strong>${Math.ceil(numero)}</strong> </p>`;

arredondaBaixo.innerHTML = `<p> Arredondando para baixo: <strong>${Math.floor(numero)}</strong> </p>`;

duasCasas.innerHTML = `<p> Com duas casas: <strong>${numero.toFixed(2)}</strong> </p>`;