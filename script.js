const abas = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('main section');
abas.forEach(aba => {
  aba.addEventListener('click', (evento) => {
    evento.preventDefault();
    abas.forEach(a => a.classList.remove('active'));
    secoes.forEach(s => s.classList.remove('active'));
    const alvoId = aba.getAttribute('href');
    aba.classList.add('active');
    document.querySelector(alvoId).classList.add('active');
    document.querySelector(alvoId).classList.remove('hidden');
  });
});