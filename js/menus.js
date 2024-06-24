const ham = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

ham.addEventListener('click', () => {
  menu.classList.toggle('active');
  ham.classList.toggle('active');
});
