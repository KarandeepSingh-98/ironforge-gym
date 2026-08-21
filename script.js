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