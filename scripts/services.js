const invites = document.querySelectorAll('.invite');
const touchDevice = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i);

if (touchDevice) {
  invites.forEach(invite => {
    invite.addEventListener('click', () => {
      invite.classList.toggle('active');
      if (parentElement.classList.contains('couples-program')){
        invite.parentElement.classList.toggle('couples-program-active')
      } else {
        invite.parentElement.classList.toggle('grief-program-active')
        }
    });
  });
} else {
  invites.forEach(invite => {
    invite.addEventListener('mouseover', () => {
      if (invite.parentElement.classList.contains('couples-program')) {
        invite.parentElement.classList.add('couples-program-active');
      } else {
        invite.parentElement.classList.add('grief-program-active');
      }
    });
  
    invite.addEventListener('mouseout', () => {
      invite.classList.remove('active');
      if (invite.parentElement.classList.contains('couples-program-active')) {
        invite.parentElement.classList.remove('couples-program-active');
      } else {
        invite.parentElement.classList.remove('grief-program-active')
      }
      
    });
  });
}