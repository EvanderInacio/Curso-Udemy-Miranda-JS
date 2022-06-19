
// ====================== FUNÇÃO ====================== //  


function saudacao(nome){
  return `Bom dia ${nome}!`;
}

const variavel = saudacao('Evander')  
console.log(variavel)


function soma(num1 = 1, num2 = 1){ // sempre que a função soma estiver vazia ele ira assumi a conta e ira soma 1 + 2 
  const resultado = num1 + num2
  return  resultado; // Nada do que estiver abaixo do return não ira executar 
  console.log('Isso aqui não ira executar, pois esta abaixo do return')
}

console.log(soma()) // se eu mandar apenas um valor ele ira assumi o outro valor e me dar uma resultado, se colocar 5 aqui, o num1 sera 5, mas o num2 que não tem nenhum valor ira ser o definido na função 2. Caso coloque os dois valores ele ira desconsiderar o valor na função 

 
//  OUTRO JEITO DE CRIAR UMA FUNÇÃO

const raiz = function (n) {
  return n ** 0.5;

}; //  NESSE CASO É OBRIGATÓRIO O USO DO PONTO E VIRGULA NO FINAL

console.log(raiz(9))


//  JEITO MAIS MODERNO 
const raizModerno = (n) => {
  return n ** 0.5;
}; 

console.log(raizModerno(16))