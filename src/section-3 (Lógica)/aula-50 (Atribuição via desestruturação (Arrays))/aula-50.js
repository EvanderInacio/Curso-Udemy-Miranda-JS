const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [primeiroNumero, segundoNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero, resto) // ele pego o 1 e jogo na variável 'primeiroNumero' e o 2 em 'segundoNumero'
 
// ... ele vai pegar o todos os outros valores

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [um, , tres, , cinco, , sete] = num
console.log(um, tres, cinco, sete) // , , ele vai pular um valor e pegar o proximo



const num2 = [
  [1, 2, 3], // índice 0 é esse array completo e dentro dele tbm tem o índice 0, 1, 2
  [4, 5, 6], // índice 1 é esse array completo e dentro dele tbm tem o índice 
  [7, 8, 9] 
]

const [lista1, lista2, lista3] = num2
console.log(lista2[2]) // ele vai pegar dentro do array 2 o índice 2 que é o 6

console.log(num2[1][2])