const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menu.id == 'menu-hide' || menu.id == 'menu' ? menu.id = 'menu-show' : menu.id = 'menu-hide';

  if (menu.id === 'menu-show') {
    menuButton.id = 'menu-button-active';
  } else if (menu.id === 'menu-hide') {
    menuButton.id = '';
  }
});

