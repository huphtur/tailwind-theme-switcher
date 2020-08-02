// Toggle Dark Theme
var d = document.documentElement,
  t = document.querySelector('#theme-btn'),
  m = localStorage.getItem('theme');

if (m == 'dark') {
  d.classList.add('theme-dark');
}

t.addEventListener('click', function () {
  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark');
    localStorage.removeItem('theme');
  } else {
    d.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  }
});
