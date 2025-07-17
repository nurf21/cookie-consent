document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept-cookies');

  const consent = localStorage.getItem('cookieConsent');
  
  if (consent !== 'accepted') {
    setTimeout(() => {
      popup.classList.remove('hidden');
    }, 1000);
  };

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    popup.classList.add('hidden');
  });
})