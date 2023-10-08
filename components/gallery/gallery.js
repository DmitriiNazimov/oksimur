class Gallery {
    constructor(selectors) {
        this.setProperties();
        this.setListeners(selectors);
    }

    /* Устанавливаем свойства для галереи */
    setProperties() {
        this.galleryElem = document.querySelector('.gallery');
        this.burgerMenuBtn = document.querySelector('.burger-menu');
        this.galleryContentElem = this.galleryElem.querySelector('.gallery__content');
        this.stubElem = this.galleryElem.querySelector('.gallery__stub');
        this.imgContainer = this.galleryElem.querySelector('.gallery__img-container');
        this.titleElem = this.galleryElem.querySelector('.gallery__title');
        this.overlayElem = this.galleryElem.querySelector('.gallery__overlay');
        this.closeBtn = this.galleryElem.querySelector('.gallery__close-btn');
        this.prevBtn = this.galleryElem.querySelector('.gallery__prev');
        this.nextBtn = this.galleryElem.querySelector('.gallery__next');

        /* Текущая галерея и индекс текущего изображения */
        this.current = {
            items: null,
            index: null,
        };

        /* Управление заглушкой о том, что галерея просмотрена */
        this.stub = {
            show: () => {
                this.stubElem.classList.remove('hidden');
                this.titleElem.classList.add('hidden');
                this.imgContainer.classList.add('hidden');
            },
            hide: () => {
                this.stubElem.classList.add('hidden');
                this.titleElem.classList.remove('hidden');
                this.imgContainer.classList.remove('hidden');
            },
        };
    }

    /* Скрываем/показываем галерею */
    toggle(item) {
        this.galleryElem.classList.toggle('hidden');
        this.burgerMenuBtn.classList.toggle('hidden');
        document.body.style.overflow = 'auto';

        if (item) {
            this.stub.hide();
            // Отключает скролл страницы
            document.body.style.overflow = 'hidden';
        }
    }

    /* Добавляем изображение в область просмотра галереи */
    addImg(item, index, items) {
        this.titleElem.textContent = item.getAttribute('alt');
        this.current.items = items;
        this.current.index = index;

        if (this.imgContainer.firstChild) {
            this.imgContainer.style.minWidth = `${this.imgContainer.firstChild.width}px`;
            this.imgContainer.innerHTML = '';
        }

        this.imgContainer.append(this.createImgClone(item));
        this.startFadeEffect();
        this.toggleControlBtns();
    }

    /* Меняем изображение в области просмотра галереи */
    changeImg = (directionIsForward = true) => {
        const newIndex = directionIsForward ? this.current.index + 1 : this.current.index - 1;
        this.current.index = newIndex;
        const newItem = this.current.items[newIndex];

        if (newItem) {
            this.stub.hide();
            this.addImg(newItem, newIndex, this.current.items);
        } else if (!newItem && this.stubElem.classList.contains('hidden')) {
            this.stub.show();
            this.toggleControlBtns();
        } else {
            this.toggle(newItem);
        }
    };

    /* Создаем клон изображения, который будем показывать в области просмотра галереи */
    createImgClone(item) {
        const itemClone = item.cloneNode(true);
        itemClone.classList.add('gallery__img');
        itemClone.style.opacity = 0;
        // eslint-disable-next-line no-use-before-define
        itemClone.addEventListener('click', () => this.changeImg());
        return itemClone;
    }

    /* Запускаем эффект смены изображения с затуханием */
    startFadeEffect() {
        setTimeout(() => {
            this.imgContainer.style.minWidth = null;
            this.imgContainer.firstChild.style.opacity = 1;
        }, 50);
    }

    /* Показываем/скрываем кнопки управления галереей */
    toggleControlBtns() {
        if (this.current.index < 0) {
            this.prevBtn.classList.add('hidden');
        } else {
            this.prevBtn.classList.remove('hidden');
        }

        if (this.current.index >= this.current.items.length) {
            this.nextBtn.classList.add('hidden');
        } else {
            this.nextBtn.classList.remove('hidden');
        }
    }

    /* Устанавливаем слушатели событий */
    setListeners(selectors) {
        selectors.forEach((selector) => {
            const items = document.querySelectorAll(selector);

            items.forEach((item, i) => {
                item.addEventListener('click', () => {
                    this.toggle(item);
                    this.addImg(item, i, items);
                });
            });
        });

        this.overlayElem.addEventListener('click', () => this.toggle());
        this.closeBtn.addEventListener('click', () => this.toggle());
        this.stubElem.addEventListener('click', () => this.toggle());
        this.prevBtn.addEventListener('click', () => this.changeImg(false));
        this.nextBtn.addEventListener('click', () => this.changeImg());

        window.addEventListener('keydown', (event) => {
            if (this.galleryElem.classList.contains('hidden')) {
                return;
            }

            if (event.key === 'Escape') {
                this.toggle();
            }

            if (event.key === 'ArrowLeft') {
                this.changeImg(false);
            }

            if (event.key === 'ArrowRight') {
                this.changeImg();
            }

            if (event.key === ' ') {
                this.changeImg();
            }
        });
    }
}

// eslint-disable-next-line no-new
new Gallery(['.artwork__item-img', '.velvet-trash__item-img', '.awards__item-img']);
