const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const title = document.getElementById('section-title');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((btn) => btn.classList.remove('active'));
    item.classList.add('active');

    const target = item.dataset.target;
    views.forEach((view) => {
      view.classList.toggle('active', view.id === target);
    });

    title.textContent = item.textContent;
  });
});
