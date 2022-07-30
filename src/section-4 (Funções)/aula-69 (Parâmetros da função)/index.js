// função definida pela palavra function tem uma palavra reservada 'arguments' que sustenta todos os argumentos enviados

// 'a, b, c' eles vão receber os primeiros argumentos e o restante continuara em 'arguments'
function funcao(a, b = 5, c = 10) { 
  console.log(a + b + c);
}
funcao(7, 2, 1)

// -----------------------------------------

function pessoa([ nome, sobrenome, idade]){
  console.log(nome, sobrenome, idade)
}

const pessoa1 = [
  nome = 'Evander',
  sobrenome = 'Inácio',
  idade = 24
]


pessoa(pessoa1)


// ----------------------------

function conta(operador, acumulador, ...numeros) {
  for ( let numero of numeros) {
   if(operador === '+') acumulador += numero
   if(operador === '-') acumulador -= numero
   if(operador === '*') acumulador *= numero
   if(operador === '/') acumulador /= numero
  }

  console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)

