const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.getElementById('leadForm');
const msg = document.getElementById('formMessage');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    msg.textContent = `Thanks, ${name}. Your request is ready to be connected to your CRM/email endpoint.`;
    form.reset();
  });
}
