
// ==================== Valores =============================== //


/* Valores primitivos (imutável) - string, number, boolean, undefined, null,
 (bigint, symbol) 
 
 Valores por referencia (mutável) - array, object, function*/

 // primitivos
 let a = 'A'
 let b = a 
 console.log(a, b) // 'b' vai copiar 'a' e ambos vão ter o valor de 'A'

 a = 'Outro'
 console.log(a, b) // O a agora passa a ter o valor de 'Outro', mas o b continua tendo o valor de 'A', pois b apenas copiou o valor de a, ele não sofre nenhuma alteração apos isso que ocorra em a durante o código
 
 // por referencia
 let d = [1, 2, 3, 4, 5]
 let e = d

console.log(d, e) // Mesma coisa 'e' vai copiar 'd' e ambos vão ter o valor do array [1, 2, 3, 4, 5]

d.push(6) // Agora 'd' vai passar a ter 6 e o 'e' também vai, pois nesse caso o 'e' esta apontando para o mesmo local da memoria que o 'd', então ele sofre as mesmas alterações 

console.log(d, e)// ambos vão ter o mesmo valor.


e.pop() // ele vai remover o ultimo valor de ambos ja que ambos apontam para a mesma memoria.
console.log(d, e) // o 6 foi removido de ambos mesmo só declarando em 'e', pois array é valor por referencia.


// Valores primitivos eles são copiados quando passa o valor dele para outra variável '=' 

// Valores por referencia eles apontam para a mesma memoria. Portanto ambos sofre a mesma alteração, ja que as variáveis apontam para o mesmo local da memoria.


let f = [...d] // nesse caso mesmo sendo valor por referencia ele foi copiado usando o [...]


const pessoa1 = {
  name: 'Evander',
  sobrenome: 'Inácio'
};

const pessoa2 = {...pessoa1} // mesma coisa 

pessoa1.sobrenome = 'Lopes'
console.log(pessoa1, pessoa2);