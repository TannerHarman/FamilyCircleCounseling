const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menu.id == 'menu-hide' || menu.id == 'menu' ? menu.id = 'menu-show' : menu.id = 'menu-hide';
});

let getOS = () => {
  let OSName = 'Unknown OS'

  if (navigator.platform.indexOf('Win')!=-1) OSName='Windows';
  if (navigator.platform.indexOf('Mac')!=-1) OSName='MacOS';
  if (navigator.platform.indexOf('X11')!=-1) OSName='UNIX';
  if (navigator.platform.indexOf('Linux')!=-1) OSName='Linux';
  if (navigator.platform.indexOf('iPhone')!=-1) OSName='iOS';
  if (navigator.platform.indexOf('Android')!=-1) OSName='Android';

  return OSName;
}

let setPhoneLink = (getOS) => {
  let phoneLink = document.querySelector('#phone');

  let OS = getOS();

  if (OS == 'Android' || OS == 'iOS') {
    phoneLink.href = 'tel:+1-307-347-4001'
  }
}