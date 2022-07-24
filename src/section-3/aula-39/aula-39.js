
// ========================== Curto Circuito ========================== //

/*
  && = será true se todos os operadores forem true. Caso contrário será false. Retornando imediatamente com o valor do primeiro operando falso que encontrar; se todos os valores forem true , o valor do último operando será retornado.
*/

/*
|| = será false se todos os operadores forem falsos, caso contrario se tiver um ou mais verdadeiros ele sempre vai retorna verdadeiro.
*/


 console.log('Evander' && 0 && 'Cristiano') // ele vai retornar 0

 console.log('Evander' && true && 'Cristiano') // ele vai retornar Cristiano, que é a ultima expressão verdadeira

 console.log('Evander' && true && NaN) // ele vai retornar NaN, que é a ultima expressão
 
 // FALSY = false, null, undefined, 0, NaN, ''  (todos os valores falsy)

 console.log('maria' && '' && 'Cristiano') // ele vai retornar ''


 function falaOI(){
   return 'oi';
 }

 const vaiExecutar = false

 console.log(vaiExecutar && falaOI()) // ele vai retornar false, pois a primeira expressão é falsy

 console.log(vaiExecutar || falaOI()) // ele vai retornar o valor da função, pois a primeira expressão é true
 
 console.log('' || 0 || true || 'algo' || false) // ele vai retornar o primeiro valor verdadeiro, ignorando os próximos verdadeiros
