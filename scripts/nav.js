const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menu.id == 'menu-hide' || menu.id == 'menu' ? menu.id = 'menu-show' : menu.id = 'menu-hide';
});

let getOS = () => {
  let OSName = 'Unknown OS'

  if (navigator.userAgent.match(/iPhone/i)) OSName='iOS';
  if (navigator.userAgent.match(/Android/i)) OSName='Android';

  return OSName;
}

let setPhoneLink = () => {
  let phoneLink = document.querySelector('#phone');

  let OS = getOS();

  if (OS == 'Android' || OS == 'iOS') {
    phoneLink.href = 'tel:+1-307-347-4001';
  }

  phoneLink.href = OS;
}

setPhoneLink();