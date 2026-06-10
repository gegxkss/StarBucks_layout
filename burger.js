const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (burgerButton && mobileMenu) {
    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        burgerButton.classList.toggle('active');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burgerButton?.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    if (!mobileMenu || !burgerButton) return;
    const target = event.target;

    if (mobileMenu.classList.contains('active') &&
        target instanceof Node &&
        !mobileMenu.contains(target) &&
        !burgerButton.contains(target)) {
        mobileMenu.classList.remove('active');
        burgerButton.classList.remove('active');
    }
});
