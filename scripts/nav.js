const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu-items');

menuButton.addEventListener('click', () => {
  menu.classList == 'menu-hide' ? menu.classList = 'menu-show' : menu.classList = 'menu-hide';
});