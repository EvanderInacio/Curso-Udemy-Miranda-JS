
try {
  console.log(naoExiste)
} catch(e) {
 console.log('naoExiste não existe.')
}


function some (x, y) {
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser numeros')
  }

  return x + y
}

try{
  console.log(some(1, 2))
  // console.log(some('1', 2))
} catch(error) {
 // console.log(error) 
 console.log('erro')
} 