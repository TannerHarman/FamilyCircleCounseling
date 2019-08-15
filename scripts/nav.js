const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menu.id == 'menu-hide' || menu.id == 'menu' ? menu.id = 'menu-show' : menu.id = 'menu-hide';
});

let setPhoneLink = () => {
  let android = navigator.userAgent.match(/Android/i);
  let iphone = navigator.userAgent.match(/iPhone/i)
  const phoneLink = document.querySelector('#phone');

  let OS = getOS();

  if (android || iphone {
    phoneLink.href = 'tel:+1-307-347-4001';
  }
}

setPhoneLink();