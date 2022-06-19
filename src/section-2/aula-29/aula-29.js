
// ======================== ARRAY ======================== //


//                0         1        2          3
const alunos = ['Luiz', 'Evander', 'Andre', 'Gustavo']

alunos[0] = 'Antonio' // alterando o indice 0 
alunos.push('Luiza') // Adicionando um novo valor para o array no final dele (mais usado )

alunos.unshift('Fábio') // Adicionando um novo valor para o array no inicio dele
alunos.unshift('Carlos') // O Carlos vai ser o primeiro, pois ele foi declarado em baixo do fabio


const removeFinal = alunos.pop() // vai remover o ultimo valor do array
console.log(removeFinal)

const removeInicio = alunos.shift() // vai remover o primeiro valor do array
console.log(removeInicio) // O luiz será removido e Evander vai passar a ser o indice 0

// delete alunos[1]  ele será removido, mas não tera alterações dos indices, portanto o índice 1 passa a ser undefined.

console.log(alunos.slice(0, 3))  // vai pegar somente 3 valores do array 

console.log(alunos)


console.log(typeof alunos) // vai retornar um objeto
console.log(alunos instanceof Array) // para ter a certeza que é um array, se retornar true, se não fosse retornasse false.


// geralmente vai se adiciona um elemento ao final do array e não no inicio, por isso o método push será mais usado que o unshift