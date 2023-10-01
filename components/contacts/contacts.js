const phoneStringPart1 = '+7 916 970';
const phoneStringPart2 = '-55-00';
const emailStringPart1 = 'omur5';
const emailStringPart2 = '@rambler.ru';

const phoneElement = document.querySelector('#contacts__item-content-phone');
const phoneElementActiveClass = 'contacts__item-content-phone_active';
const emailElement = document.querySelector('#contacts__item-content-email');
const emailElementActiveClass = 'contacts__item-content-email_active';

const listener = (event, elem, activeClass, str1, str2, hrefPref) => {
    if (!elem.classList.contains(activeClass)) {
        event.preventDefault();
        // eslint-disable-next-line no-param-reassign
        elem.textContent = str1 + str2;
        // eslint-disable-next-line no-param-reassign
        elem.href = `${hrefPref}:${str1}${str2}`;
        elem.classList.add(activeClass);
    }
};

phoneElement.addEventListener('click', (event) => listener(event, phoneElement, phoneElementActiveClass, phoneStringPart1, phoneStringPart2, 'tel'));
emailElement.addEventListener('click', (event) => listener(event, emailElement, emailElementActiveClass, emailStringPart1, emailStringPart2, 'mailto'));
