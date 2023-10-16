/* eslint-disable import/no-absolute-path */
import bgUrl from '/bg/greeting-background.jpg';
import bgUrlMobile from '/bg/greeting-background-mobile.jpg';

const greetingWrapperElem = document.querySelector('#greeting__wrapper');
const arrowDownElem = document.querySelector('.greeting__arrow-down-img');
const greetingContentElem = document.querySelector('.greeting__content');

const backgroundImage = new Image();
backgroundImage.src = window.screen.width <= 1024 ? bgUrlMobile : bgUrl;
backgroundImage.onload = () => {
    greetingWrapperElem.classList.remove('greeting__wrapper_zoom-wait-load');
    setTimeout(() => {
        arrowDownElem.classList.remove('greeting_opacity-wait-load');
        arrowDownElem.classList.remove('jump-wait-load');
    }, 2000);
};

const font = new FontFace('Montserrat', 'url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2)');
font.load().then(() => {
    greetingContentElem.classList.remove('greeting_opacity-wait-load');
});

arrowDownElem.addEventListener('click', () => {
    const aboutElem = document.querySelector('#about');
    aboutElem.scrollIntoView({ block: 'center', behavior: 'smooth' });
});
