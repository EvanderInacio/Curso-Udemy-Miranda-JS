 
 // =====================  Aritméticos ==================================//

/*
  + Adição / Concatenação 
  - subtração
  / divisão
  * multiplicação

  ** = elevação sempre que quiser elevar um numero ao outro
  %  = retorna o resto da divisão 
  */
 

  const num1 = 5
  const num2 = 10
  console.log(num1 + num2)

  // Concatenação = vai unir dois ou mais valores em uma unica string = concatenação 2030
  const num3 = '20' // string
  const num4 = 30  // number
  console.log (num3 + num4)

  // ** = elevação sempre que quiser elevar um numero ao outro
  const num5 = 2
  const num6 = 10
  console.log(num5 ** num6)

  // % = retorna o resto da divisão 
  const num7 = 10
  const num8 = 5
  console.log(num7 % num8)


  // ordem de presedencia aritmetica 
 /*
  () parenteses
  ** elevação
  * multiplicação     / divisão     % resto da divisão
  + Adição    - subtração
 
  console.log(num7 * num8 / num5 ) ele vai fazer a conta normalmente da esquerda para a direita pois os operadores tem a mesma procedencia 
 */

  // incremento ++
  let contador = 1;  // não pode usar const nesse caso 
  ++contador; // 2   // pode colocar tanto antes como apos 
  contador++; // 3
  contador++; // 4
  // pre incremento e pos incremento 
  console.log(contador++) // ele exibiu o valor de 4 e depois incremento para 5
  console.log(contador) // vai exibir 5
  console.log(++contador) // se colocar o ++ antes ele vai primeiro incrementar para depois exbir o resultado 


// decremento --
let decremento = 10;  // não pode usar const nesse caso 
  --decremento; // 9   // pode colocar tanto antes como apos 
  decremento--; // 8
  console.log(decremento) // mesma coisa tem o pos decremento e o pre decremento


// ESSA É A MELHOR MANEIRA DE FAZER ALGO DESSE TIPO
let exemple = 1;
exemple++;  
console.log(exemple) // Não faz diferença nesse caso o pre ou pos incremento pois ele ja vai ter o valor nesse linha de 2 no caso.

console.log('SEPARAÇÃO ------------')

// Quando vc quiser incrementar mais um de um valor pois o ++ incrementa apenas mais um
const passo = 2;
let contadorDuplo = 0;
contadorDuplo += passo; // contadorDuplo = contadorDuplo + passo 2
contadorDuplo *= passo;  
contadorDuplo /= passo;
contadorDuplo **= passo;
console.log(contadorDuplo); 


// NaN = not a number
const numero1 = 110
const numero2 = 'oi'
console.log(numero1 * numero2);

const numero3 = 11
const numero4 = parseInt('5') // ele vai pegar essa string e coverter em numero (Inteiro)
const numero5 = parseFloat('5.5') // ele vai retornar numero de ponto flutuante (Decimais)
const numero6 = Number('5.2') // O jeito mais simples sem precisar declarar um ou outro
console.log(numero3 + numero4) 
console.log(numero3 + numero5) 
console.log(numero3 + numero6) 