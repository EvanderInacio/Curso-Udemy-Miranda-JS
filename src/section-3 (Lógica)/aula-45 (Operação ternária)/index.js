

// ============== Operação ternaria ============================ //


// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
 
const pontuacaoUsuario = 1000;
const resultado = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal'
console.log(resultado);

// if (pontuacaoUsuario >= 1000){
//   console.log('Usuario Vip')
// } else {
//   console.log('Usuario normal')
// }


// or / ou 

const cor = 'black'
const corPadrao = cor || 'pink'  // vai retornar verdadeiro se um deles for verdadeiro

console.log(corPadrao);
