const fixedMenu = document.querySelector('.menu-fixed');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const headerBottom = header.offsetTop + header.offsetHeight;

  if (window.scrollY > headerBottom + 20) {
    fixedMenu.classList.add('visible');
  } else {
    fixedMenu.classList.remove('visible');
  }
});