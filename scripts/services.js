const invites = document.querySelectorAll('.invite');
const touchDevice = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i);

let toggleImages = (invite) => {
  const backgroundImages = invite.parentElement.querySelectorAll('figure');
  backgroundImages.forEach(image => {
    image.classList.toggle('opacity-one');
    image.classList.toggle('opacity-zero');
  });
}

let revealSection = () => {
  if (touchDevice) {
    invites.forEach(invite => {
      invite.addEventListener('click', () => {
        toggleImages(invite);
        invite.classList.toggle('active')
      });
    });
  } else {
    invites.forEach(invite => {
      invite.addEventListener('mouseover', () => {
        toggleImages(invite);
        invite.classList.toggle('active')
      });
  
      invite.addEventListener('mouseout', () => {
        toggleImages(invite);
        invite.classList.toggle('active')
      });
    });
  }
}

revealSection();