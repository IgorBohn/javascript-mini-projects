const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

open.addEventListener('click', () => {
  container.classList.add('active');
  console.log('cliclu');
});

close.addEventListener('click', () => {
  container.classList.remove('active');
});
