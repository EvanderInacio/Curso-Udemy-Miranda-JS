
// while usado quando não se sabe o valores exatos

function random(min, max) {
  const numero = Math.random() * (max - min) + min;
  return Math.floor(numero);
}

const min = 1
const max = 100
let rand = random(min, max)

console.log(rand)

while (rand !== 10){
  rand = random(min, max)
  console.log(rand)
}

console.log('------------------------------------------------------')

do {
  rand = random(min, max)
  console.log(rand)
}while(rand !== 10);


// while = ele checa a condição para depois executar enquanto for verdadeiro
// do while - executa primeiro a função para depois ver a condição