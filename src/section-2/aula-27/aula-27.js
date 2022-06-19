
let num1 = 9.5467;
let num2 = Math.floor(num1); // ele vai arrendondar o valor para baixo = 9 
console.log(num2); // de 9.5467 para baixo ficando apenas 9 
let num3 = Math.ceil(num1); // arrendondar o valor para cima 
console.log(num3)// ficando com o valor de 9.5467 para 10 

let num4 = Math.round(num1) // ele vai arrendondar o valor automaticamente para o inteiro mais proximo 
console.log(num4) // ficando com o valor de 9.5467 para 10, pois o 10 é o inteiro mais proximo ja que ele passo da metade 9.50 se for 9.49 ele arrendondar para 9


console.log(Math.max(1, 2, 555, 546, 8989, -55, -5456, -6655))// Vai pegar o maior numero 
console.log(Math.min(1, 2, 555, 546, 8989, -55, -5456, -6655))// Vai pegar o menor numero 

console.log(Math.random()) // ele vai gerar um numero aleatório entre 0 e 1, com varias casas decimais, exemplo: 0.08065150333571824. Ele nunca vai colocar o 1 primeiro 1.08565666

const numero = Math.round(Math.random() * (10 - 5) + 5); // o numero aleatório vai ficar entre 10 e 5 
// Math.round = vai tirar as casas decimais 
console.log(numero)


console.log(Math.PI) // valor de pi 

let num5 = 25
console.log(num5 ** 0.5) // raiz quadrada 


// infinity 
console.log(100 / 0) // ele vai dar o valor de infinity 