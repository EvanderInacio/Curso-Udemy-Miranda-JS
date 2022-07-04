const nomes = [
  'Evander',
  'Luiz',
  'João',
  'Maria'
]

// clássico
// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// in
// for (let i in nome) {
//   console.log(nome[i]);
// }

for (let valor of nomes) {
  console.log(valor);
}

console.log('====================================')

nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});


// ===============================================================
console.log('====================================')

const pessoa = {
  name: 'João',
  sobrenome: 'Silva',
  idade: 55
}

for (valor in pessoa) {
  console.log(valor, pessoa[valor])
}

// for (valor of pessoa){  vai dar erro, pois o objeto não é iterável 
//   console.log(valor, pessoa[valor])
// }



// for clássico -> Geralmente com iteráveis (array, string)
// for in -> Retorna o índice ou chave (array, string, objeto)
// for of -> Retorna o valor em si (iteráveis, array, string)

