/**
 * Edit these links in one place.
 * store:     the storefront URL once it is online
 * whatsapp:  number in international format without + (Egypt: 20 then the number without the leading 0)
 */
const LINKS = {
  store: 'http://localhost:4600',
  whatsapp: 'https://wa.me/201000000000?text=' + encodeURIComponent('مرحباً، عندي سؤال عن برّه'),
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  tiktok: 'https://tiktok.com/',
};

document.querySelectorAll('[data-link]').forEach((a) => {
  const url = LINKS[a.dataset.link];
  if (url) a.href = url;
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
