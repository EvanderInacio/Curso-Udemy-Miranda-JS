
// ================================ Object ============================= //


const teste = {
  name: 'Evander',
  sobrenome: 'Inácio',
  idade: 24,

  fala() {
    console.log(`${this.name} ${this.sobrenome} Esta falando oi!`)
  },

  ano() {
    console.log(`A minha idade é ${this.idade}`)
  },

  incremento() {
    this.idade++
  }
}

teste.fala()
teste.ano()
teste.incremento()
teste.ano()
///===========================================================================//

function criaPessoa(nome, sobrenome, idade, altura) {
  return {
    nome,
    sobrenome,
    idade,
    altura
  }
}

const pessoa1 = criaPessoa('Evander', 'Inácio', 24, 1.8)
const pessoa2 = criaPessoa('Luiz', 'Miranda', 30, 1.7)
const pessoa3 = criaPessoa('Maria', 'Oliveira', 68, 1.6)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)
