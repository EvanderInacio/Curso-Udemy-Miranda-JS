
  //             0123456789101112.... 
  let umaString = 'Meu texto, sobre o rato roeu a roupa do rei de roma.'

  console.log(umaString.charAt(4)) // Vai pegar o valor exato da string 
  console.log(umaString + ' num belo dia') // contatenação
  console.log(`${umaString} da noite `) // contatenação
  console.log(umaString.indexOf('texto')) // em qual indice ou numero começa a palavra
  console.log(umaString.lastIndexOf('o' , 3)) // vai começar do final para o começo 
  // ele vai começar do 3, mas como ele não tem o 'o' ele vai retornar -1
  
  console.log(umaString.match(/[a-z]/g)) // expressões regulares
  console.log(umaString.search(/x/)) // muito similar ao indexof, mas com a diferença que ele aceita expressões regulares.
  
  console.log(umaString.replace('Meu' , 'Um')) // ele vai substituir por exemplo o texto
  
  console.log(umaString.replace(/r/, '#')) // ele vai colocar '#' apenas no primeiro 'r' 
  console.log(umaString.replace(/r/g, '#')) // ele vai colocar '#' em todos os 'r'
  
  console.log(umaString.length) // vai exibir exatamento o tamanho da string (tamanho de caractere desse string)
  
  console.log(umaString.slice(4 , 9)) // serve para pegar um trecho exato da string, tendo um inicio e fim da onde vai pegar
  // mas sempre pega um casa depois da onde vc quer pegar exe: 4 inicio é o 't' o 8 seria igual a o 'o', mas ele só iria pegar 'text' sem o 'o' por isso o 9 para pegar toda a palavra
  
  console.log(umaString.length - 3) // ele pega o tamanho todo da string -3
  console.log(umaString.slice(-5 )) // ele pega o tamanho do length - 3 
  console.log(umaString.slice(47)) // seria o mesmo que o de cima
  console.log(umaString.slice(-5, - 1 )) // ele vai retira o ultimo caractere que no caso é o '.' ficando só 'roma' 
  
  console.log(umaString.split('r', 2)) // dividir um caractere, exe: 'r' ele não vai exibir todos os r da string
  // podendo colocar tbm um limite no caso ele vai exibir 2 resultados