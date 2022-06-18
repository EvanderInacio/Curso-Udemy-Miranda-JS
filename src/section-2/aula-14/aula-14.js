// case-sensitive = maiúsculas e minúsculas nomeCliente é diferente de nomecliente
// não pode modificar o valor de uma constante

const nome = 'João' // Não posso declarar uma constante sem colocar um valor nela

//nome = 'Andre' ( Não posso modificar o valor dela diferente de let ) 

// posso pegar o valor de uma variavel(let) ou constante(const) e atribuir o valor a outra variavel ou constante 

const primeiroNumero = 10
const segundoNumero = 20


const resultado = primeiroNumero + segundoNumero // guardando o resultado em 'resultado'

const resultadoDuplicado = resultado * 5 // multiplicando o 'resultado' por 5

let resultadoTriplicado = resultadoDuplicado * 3
resultadoTriplicado = resultadoTriplicado + 5 // cuidado pq aqui perdeu o primeiro resultado do "resultadoTriplicado"

console.log(resultadoTriplicado)