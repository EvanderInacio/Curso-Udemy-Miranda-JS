
function max() {
  const a = 10
  const b = 20

  if(a < b){
    return Math.max(a, b)
  } else {
    console.log('não consegui calcular')
  }
}

console.log(max())


// solução do professor
function num(y, z) {
  if (y > z) {
    return y
  } 
  return z
}
const resultado = num(1, 2)
console.log(resultado)


// outra 
const max2 = (x, y) => {
  return x > y ? x : y;
}
console.log(max2(200, 100))


// em uma linha
const max3 = (x, y) => x > y ? x : y;
console.log(max3(400, 100))