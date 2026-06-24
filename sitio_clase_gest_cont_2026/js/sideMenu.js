// Menú lateral

const menu = document.getElementById('menu');
const burgerBtn = document.getElementById('burger-btn');
const shadow = document.getElementById('shadow');

const closeMenu = () => {
    document.body.classList.remove('menu-open');
    menu.classList.remove('is-open');
    shadow.style.pointerEvents = 'none';
    shadow.style.background = 'rgba(0,0,0,0)';
};

const openMenu = () => {
    document.body.classList.add('menu-open');
    menu.classList.add('is-open');
    shadow.style.pointerEvents = 'auto';
    shadow.style.background = 'rgba(0,0,0,.4)';
};

burgerBtn.addEventListener('click', () => {

    if (menu.classList.contains('is-open')) {
        closeMenu();
        return;
    }

    openMenu();
});

shadow.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth > 740) closeMenu();
});

// Cambiador de tema

const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {

    const dark = root.classList.toggle('dark');

    themeIcon.className =
        dark ? 'bi bi-sun' : 'bi bi-moon';
});