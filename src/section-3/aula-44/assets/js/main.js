// Minha solução
const form = document.querySelector('#form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const inputPeso = document.querySelector('#peso')
  const inputAltura = document.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  const imc = peso / (altura * altura)
  const resultado = document.querySelector('#resultado')

  if (imc < 18.5) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está abaixo do peso`
    resultado.style.backgroundColor = '#f5b489'
    return
  }

  if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está no peso ideal`
    resultado.style.backgroundColor = '#b2d8b2'
    return
  }

  if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está acima do peso`
    resultado.style.backgroundColor = '#ecf5a6'
    return
  }

  if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = ` Seu IMC é ${imc.toFixed(
      2
    )} Você está com obesidade grau 1`
    resultado.style.backgroundColor = '#fa8e8e'
    return
  }

  if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} Você está com obesidade grau 2`
    resultado.style.backgroundColor = '#fc3a50'
    return
  }

  if (imc >= 40) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} Você está com obesidade grau 3`
    resultado.style.backgroundColor = '#f70f0f'
    return
  } else {
    resultado.innerHTML = `Houve um erro. Verifique os dados informados nos campos.`
    resultado.style.backgroundColor = '#918484'
  }
})

// Solução do professor

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
  e.preventDefault()
  const inputPeso = e.target.querySelector('#peso1')
  const inputAltura = e.target.querySelector('#altura1')

  const peso1 = Number(inputPeso.value)
  const altura1 = Number(inputAltura.value)

  if (!peso1 || !altura1) {
    setResultado('Preencha todos os campos', false)
    return
  }

  const imc = getImc(peso1, altura1)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} e você está ${nivelImc}`

  setResultado(msg, true)
})

function getnivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso ideal',
    'Acima do peso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]

  if (imc >= 39.9) {
    return nivel[5]
  }
  if (imc >= 34.9) {
    return nivel[4]
  }

  if (imc >= 29.9) {
    return nivel[3]
  }

  if (imc >= 24.9) {
    return nivel[2]
  }

  if (imc >= 18.5) {
    return nivel[1]
  }

  if (imc < 18.5) {
    return nivel[0]
  }
}

function getImc(peso1, altura1) {
  const imc = peso1 / (altura1 * altura1)
  return imc.toFixed(2)
}

function createP() {
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  const resultado2 = document.querySelector('#resultado2')
  resultado2.innerHTML = ''

  const p = createP()

  if (isValid) {
    p.classList.add('paragrafo-valido')
  } else {
    p.classList.add('paragrafo-invalido')
  }

  p.innerHTML = msg
  resultado2.appendChild(p)
}
