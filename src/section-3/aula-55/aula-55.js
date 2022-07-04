// for in -> le os indices(array) ou chaves(objeto)
const frutas = [
  'banana',
  'laranja',
  'limão',
  'maçã'
]

//  for (let = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
//  }

for (let i in frutas) {
  console.log(i);
}


console.log('\n================================')

const pessoa = {
  name: 'Evander',
  sobrenome: 'Inácio',
  idade: 24,
  altura: 1.80
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}