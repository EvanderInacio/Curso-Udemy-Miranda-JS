const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av. Brasil',
    numero: 320
  }
}

// Atribuição via desestruturação
const {
  nome: name,
  sobrenome,
  endereco: { rua, numero }, // pegar os valores dentro do objeto endereco
  ...resto
} = pessoa
console.log(rua, resto)
