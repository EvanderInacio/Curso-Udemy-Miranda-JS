
// =========================== IF ELSE =========================== //


// posso usar quando else if quiser
// só posso ter um else e que ele será o ultimo

const hora = 15

if (hora >= 0 && hora <= 11){
  console.log('Bom dia!')
} else if(hora >= 12 && hora <= 18){
  console.log('Boa tarde!')
} else if(hora >= 19 && hora <= 23){
  console.log('Boa noite!')
} else{
  console.log('Hora inválida!')
}


const grana = true

if (grana){
  console.log('Você pode comprar!')
} else{
  console.log('Você não pode comprar!')
}
