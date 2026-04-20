const menuToggle = document.getElementById('menu-toggle');
const topNav = document.getElementById('top-nav');

menuToggle?.addEventListener('click', () => {
  topNav?.classList.toggle('open');
});

topNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    topNav.classList.remove('open');
  });
});
