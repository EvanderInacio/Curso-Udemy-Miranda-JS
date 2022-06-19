
// =========================== Comparação ============================ //


/*
 Operadores comparação
 
 > maior que
 >= maior ou igual
 < menor que
 <= menor ou igual
 == igualdade (valor) ***************** Não é usado 
 === igualdade estrita ( valor e tipo ) 
 != diferente ( valor) ***************** Não é usado
 !== diferente estrita ( valor e tipo )
*/

console.log(10 > 5)

/* Não são usados por causa disso 
 igualdade ==
const num1 = 10
const num2 = '10'
const camp = num1 == num2 // ele vai dar o resultado de igual mesmo um sendo number e o outro string
console.log(camp)

diferente !=
const num3 = 10
const num4 = '10'
const camp1 = num3 != num4 // vai dar falso mesmo ambos sendo de tipos diferentes      (number/string)
console.log(camp)
*/

const num1 = 10
const num2 = '10'
const camp = num1 === num2 // vai compara se é igual o valor e o tipo, nessa caso é falso um é number e outro é string
console.log(camp)

const num3 = 10
const num4 = '10'
const camp1 = num3 !== num4 // vai dar verdadeiro, pois um é number e outro uma string
console.log(camp1)
