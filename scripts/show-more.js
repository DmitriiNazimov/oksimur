export default function setupShowMore(showMoreButtonSelector, itemsSelector, displayValue = 'block', limit = 3) {
    const showMoreBtn = document.querySelector(showMoreButtonSelector);
    const showMoreBtnLink = showMoreBtn.querySelector('.link-button');
    const items = document.querySelectorAll(itemsSelector);

    if (items.length <= limit) {
        showMoreBtnLink.style.display = 'none';
    }

    showMoreBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const hiddenItems = Array.from(items).filter((item) => window.getComputedStyle(item).display === 'none');
        const restOfHiddenItems = hiddenItems.length - limit;
        const shouldShow = restOfHiddenItems <= 0 ? hiddenItems.length : limit;

        for (let i = 0; i < shouldShow; i += 1) {
            hiddenItems[i].style.display = displayValue;

            if (i === 0) {
                hiddenItems[i].scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }

        if (restOfHiddenItems <= 0) {
            showMoreBtnLink.style.display = 'none';
        }
    });
}
