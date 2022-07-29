const verdadeiro = true

// let tem escopo de bloco {... bloco }
// var escopo de função

let nome = 'Luiz'
var nome1 = 'Otavio'

if (verdadeiro) {
  let nome = 'Andre'
  var nome1 = 'Luiz'

  if (verdadeiro) {
    let nome = 'Antonio'
    var nome1 = 'Evander'
  }
}

console.log(nome, nome1)

function falaOI () {
 
  if (verdadeiro) {
    let nome = 'Evander'
    var nome1 = 'Antonio'
  }

  console.log(nome, nome1)
}