const invites = document.querySelectorAll('.invite');
const touchDevice = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i);

console.log(touchDevice);

if (touchDevice) {
  invites.forEach(invite => {
    invite.addEventListener('click', () => {
      invite.classList.toggle('active');
    });
  });
} else {
  invites.forEach(invite => {
    invite.addEventListener('mouseover', () => {
      invite.classList.add('active');
    });
  
    invite.addEventListener('mouseout', () => {
      invite.classList = 'invite';
    });
  });
}