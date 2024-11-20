const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', () => {
    preloader.classList.add('loaded');
});

//mobile nav toggle
const navToggler = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');

navToggler.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
    e.target.classList.toggle('active');
});
