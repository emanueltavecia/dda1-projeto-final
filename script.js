const nav = document.querySelector('nav')
const menuToggle = document.getElementById('menu-toggle')
const links = nav.querySelectorAll('ul li a')

// ao clicar no botão #menu-toggle, adiciona a classe active no elemento nav para abrir o menu mobile
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})

// ao clicar em um link do menu mobile, fecha o menu
links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active')
  })
})

// ao enviar o formulário, exibe um alert de sucesso e reseta o form
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()
    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.')
    this.reset()
  })

const themeToggle = document.querySelector('.theme-toggle')
const html = document.documentElement

// tema do navegador do usuário
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

// inicia a página com o tema do navegador do usuário
if (prefersDarkScheme.matches) {
  html.setAttribute('data-theme', 'dark')
  themeToggle.textContent = '☀️ Modo Claro'
} else {
  html.setAttribute('data-theme', 'light')
  themeToggle.textContent = '🌙 Modo Escuro'
}

// evento para alterar o tema ao clicar no botão de alterar
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme')
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  html.setAttribute('data-theme', newTheme)
  themeToggle.textContent =
    newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro'
})
