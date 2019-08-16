const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menu.id == 'menu-hide' || menu.id == 'menu' ? menu.id = 'menu-show' : menu.id = 'menu-hide';

  setTimeout( () => {if (menu.id ==  'menu-hide') menu.id = 'menu'}, 151);
});

let setPhoneLink = () => {
  let android = navigator.userAgent.match(/Android/i);
  let iphone = navigator.userAgent.match(/iPhone/i)
  const phoneLink = document.querySelector('#phone');
  const emailLink = document.querySelector('#email');

  if (android || iphone) {
    phoneLink.href = 'tel:+1-307-347-4001';
  } else if (location.pathname == "/index.html") {
    phoneLink.href = email.Link = 'pages/contact.html';
    phoneLink.classList.add('hover-info');
    emailLink.classList.add('hover-info');
  } else {
    phoneLink.href = email.Link = 'contact.html';
    phoneLink.classList.add('hover-info');
    emailLink.classList.add('hover-info');
  }
}

setPhoneLink();