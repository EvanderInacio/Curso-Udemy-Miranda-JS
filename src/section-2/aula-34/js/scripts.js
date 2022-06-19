function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  function recebeForm(evento) {
    evento.preventDefault() // vai evitar que a pagina seja recarregada ao clicar no botão.

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({
      nome: nome.value,
      sobreNome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    console.log(pessoas)
    resultado.innerHTML +=
      `<p>${nome.value}, ${sobrenome.value}` +
      ` ${peso.value}  ${altura.value}</p>`
  }

  form.addEventListener('submit', recebeForm)
}

meuEscopo()
