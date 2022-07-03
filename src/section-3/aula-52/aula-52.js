for (let i = 100; i <= 500; i += 10) {
  console.log(`Linha ${i}`)
}
// let i = 100, enquanto o i for menor ou igual a 500 ele vai executar i++ (+1)
// i += 10 ele vai acrescentar de 10 em 10

console.log('================================================================')

for (let o = 500; o >= 100; o -= 10) { // vai diminuir ate 100 partindo do 500
  console.log(`Linha ${o}`)
}

console.log('=========================================================')

for (let p = 0; p <= 10; p++) {
 const par = p % 2 === 0 ? 'par' : 'impar';
 console.log(p, par)
}

console.log('=========================================================')

const frutas = [
  'banana',
  'maçã',
  'pera',
  'uva',
  'abacaxi',
  'abacate',
  'goiaba',
  'caju',
  'laranja',
  'limão',
  'pêssego',
  'melancia'
]

for (let f = 0; f < frutas.length; f++) {
  console.log(`índice ${f}`, frutas[f]);
}