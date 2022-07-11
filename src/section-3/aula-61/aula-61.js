
function ePaisagem (largura, altura) {
 return largura > altura ? true : false
}

console.log(ePaisagem(1920, 1080))


// solucão do professor

function professor (largura, altura) {
  return largura > altura
}
console.log(professor(1920, 1080))


// Arrow function
const professor2 = (largura, altura) => {
  return largura > altura
}
console.log(professor2(1920, 1080))
