window.addEventListener('scroll', () => {
    const buttonTop = document.querySelector('#button-top');
    const offsetTop = document.querySelector('#greeting__wrapper').offsetHeight;

    if (window.scrollY > offsetTop) {
        buttonTop.classList.add('button-top_visible');
    } else {
        buttonTop.classList.remove('button-top_visible');
    }
});
