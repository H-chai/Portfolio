document.getElementById('hamburger-menu').addEventListener('change', function() {
  const nav = document.querySelector('.sp-nav');
  const body = document.body;
  if (this.checked) {
    nav.style.display = 'flex';
    nav.style.animation = 'fadeIn 0.5s forwards';
    nav.style.opacity = 1;
    body.style.overflow = 'hidden';
  } else {
    nav.style.animation = 'fadeOut 0.5s forwards';
    nav.style.opacity = 0;
    body.style.overflow = '';
    setTimeout(() => {
      nav.style.display = 'none';
    }, 500);
  }
});