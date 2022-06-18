// prompt('Digite sua mensagem') // vai abrir um input de texto para o usuario digitar uma mensagem

// confirm('Você deseja enviar a mensagem?'); //vai dar uma opção de ok ou cancelar ao usuario onde retorna true caso seja ok ou false caso seja cancelar.

// alert('Mensagem enviada!! Obrigado.'); // emiti uma caixa de mensagem

let number1 = prompt('Digite o primeiro valor')
let number2 = prompt('Digite o segundo valor')

number1 = Number(number1)
number2 = Number(number2)

const resultado = number1 + number2

alert(`O resultado da sua conta foi: ${resultado}`)
