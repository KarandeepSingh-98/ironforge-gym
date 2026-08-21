document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (hamburgerMenu && navbarMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        navbarMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navbarMenu.classList.remove('active');
            }
        });
    } else {
        console.error('Hamburger menu or navbar menu element not found.');
    }
});


/* ================================
   SMOOTH SCROLLING
================================ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});