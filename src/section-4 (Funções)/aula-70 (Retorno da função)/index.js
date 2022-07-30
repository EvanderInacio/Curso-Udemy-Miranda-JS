// return
// retorna a função
// termina a função
function soma(a, b) {
  return a + b
}

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!'))

// --------------------------------------

function multiplicacao(multiplicador) {
  // multiplicador esta aqui
  return function(n) {
    return n * multiplicador
  }
}

const duplicador = multiplicacao(2)
const triplicador = multiplicacao(3)
const quadriplicador = multiplicacao(4)

console.log(duplicador(2))
console.log(triplicador(5))
console.log(quadriplicador(10))