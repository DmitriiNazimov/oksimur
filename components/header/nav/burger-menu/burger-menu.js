const burgerLinks = document.querySelectorAll('.burger-menu__wrapper .burger-menu__list-item');
const burgerCheckbox = document.querySelector('#burger-menu-checkbox');

burgerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        burgerCheckbox.checked = false;
    });
});
