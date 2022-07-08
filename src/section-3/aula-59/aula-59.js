const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros){

  if (numero === 2 || numero === 5) {
    console.log('Pulei o numero 2 e 5')
    continue  // ele sempre vai pular o numero 2 e 5
  }

  console.log(numero)

  if (numero === 7) {
    console.log('7 encontrado, saindo....')
    break // ele para assim que achar um break
  }

}

// continue ele vai pular para a proxima interação do laços ate o final
// break ele vai pular para a excussão do laço 