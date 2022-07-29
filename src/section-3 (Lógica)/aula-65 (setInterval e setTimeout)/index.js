function mostraHora() {
 let data = new Date()

 return data.toLocaleTimeString('pt-BR' , {
  hour12: false
 })
}

const timer = setInterval(function() {
  console.log(mostraHora())
}, 1000) // ele vai executar de 1 em 1 segundo sem parar

setTimeout(function() {
  clearInterval(timer)
}, 5000) // ele vai executar apenas uma vez ( ele vai parar após 5 segundos)

setTimeout(function() {
  console.log('Acabou a execução.')
}, 6000)