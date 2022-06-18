
let num1 = 1;
let num2 = 2.5; 
let num3 = 15.5164895464;

console.log(num1.toString() + num2); // toString vai converter o numero em string, ou seja, vai converter o numero em string, mas somente nessa linha 

//num1 = num1.toString nesse caso ele vai alterar para sempre o num1 como uma string

console.log(typeof num1) // o num1 continua sendo um number nessa linha  

console.log(num3.toFixed(2)) // vai deixar aparecer somente duas casas decimais

console.log(Number.isInteger(num1))//Vai retornar true se o valor for inteiro '10' se for ponto flutuante ou quebrado '10.2' irá retornar false. 

let temp = 5 * '5'; // como a string foi declarada como '5' ele vai passar
console.log(temp);
console.log(Number.isNaN(temp)); // se essa conta for not a number ele vai retornar true.
// ele sempre vai retornar verdadeiro sempre que a conta for invalida 


let num4 = 0.7
let num5 = 0.1

num4 += num5 // 0.8
num4 += num5 // 0.9
num4 += num5 // 1.0 
num4 += num5 // 1.1
num4 += num5 // 1.2
num4 += num5 // 1.3
num4 += num5 // 1.4
num4 += num5 // 1.5
num4 += num5 // 1.6
num4 += num5 // 1.7
num4 += num5 // 1.8
num4 += num5 // 1.9
num4 += num5 // 2.0 


num4 = Number(num4.toFixed(2)) // sem o Number ou parseFloat ele vai ter uma leve imprecisão  coisa de binarios mau faz diferença, mas tem ficaria algo como 1.0999999999999999 ai entra o toFixed

console.log(num4)
console.log(Number.isInteger(num4)); 

let num6 = 0.7
let num7 = 0.1

num6 = ((num6 * 100) + (num7 * 100)) / 100; // outra maneira de resolver
console.log(num6)
// vai chegar aos mesmo 0.8 igual o de cima no inicio 