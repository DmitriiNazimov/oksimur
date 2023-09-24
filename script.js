import './components/header/nav/button-top/button-top';

import setupContacts from './components/contacts/contacts';
import setupBurgerMenu from './components/header/nav/burger-menu/burger-menu';
import setupShowMore from './scripts/show-more';

setupBurgerMenu();
setupContacts();
setupShowMore('#artwork__show-more-btn', '.artwork__item');
setupShowMore('#velvet-trash__show-more-btn', '.velvet-trash__item', 'flex');
