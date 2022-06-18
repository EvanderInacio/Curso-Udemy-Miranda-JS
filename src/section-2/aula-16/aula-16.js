const nome = 'Evander'
const sobreNome = 'Inácio'
const idade = 25
const peso = 110
const altura = 1.80
let imc = 110 
let anoNascimento = 1997

imc = peso / (altura * altura) 
anoNascimento = 2022 - idade

// template strings
console.log(`Meu nome é ${nome} tenho ${idade}. 
Meu peso atual é de ${peso} que daria o imc de ${imc}.
Meu ano de nacimento é ${anoNascimento}.`)