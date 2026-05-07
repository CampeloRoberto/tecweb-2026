import './style.css'

const form = document.getElementById('login-form')

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.getElementById('email')
    const senha = document.getElementById('senha')
    const erroEmail = document.getElementById('erro-email')
    const erroSenha = document.getElementById('erro-senha')

    erroEmail.textContent = ''
    erroSenha.textContent = ''
    email.classList.remove('invalido')
    senha.classList.remove('invalido')

    let valido = true

    if (!email.value.trim()) {
      erroEmail.textContent = 'O e-mail é obrigatório.'
      email.classList.add('invalido')
      valido = false
    }

    if (!senha.value.trim()) {
      erroSenha.textContent = 'A senha é obrigatória.'
      senha.classList.add('invalido')
      valido = false
    }

    if (!valido) return

    const emailCorreto = 'aluno@gmail.com'
    const senhaCorreta = 'senha'

    if (email.value !== emailCorreto || senha.value !== senhaCorreta) {
      erroEmail.textContent = 'E-mail ou senha incorretos.'
      email.classList.add('invalido')
      senha.classList.add('invalido')
      return
    }

    sessionStorage.setItem('logado', 'true')
    window.location.href = '/index.html'
  })
}

if (!document.getElementById('login-form') && !sessionStorage.getItem('logado')) {
  window.location.href = '/login.html'
}
