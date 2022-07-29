// Declaração de função ( function hoisting)
// hoisting ele vai elevar para o topo do documento 

// falaOI() ele pode ser chamado antes da declaração semelhante ao var
function falaOI() {
  console.log('oi')
}
falaOI() // mais natural de acontecer é chamar ela depois da declaração

// first-class objects (objetos de primeira classe) pode tratar a função como dado
// function expression
const souUmDado = function() {
  console.log('Sou um Dado')
}
souUmDado()

// Arrow functions
const funcaoArrow = () => {
  console.log('Sou uma Arrow function')
}
funcaoArrow()

// dentro de um objeto 
const obj = {
  falar() {
    console.log('estou falando ')
  }
}

obj.falar()