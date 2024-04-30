import filterCharacter from "./filter-character.js";
import getAllCharacters from "./get_charaters.js";
import menuMobile from "./menu_mobile.js"
import { scrollNav } from "./scroll_menu.js";


document.addEventListener("DOMContentLoaded", e => {
    menuMobile(".cta-menu-mobile", " .menu-mobile .nav-link", ".menu-mobile");
    scrollNav(".menu-desktop", "menu-desktop-active")
    getAllCharacters();
    filterCharacter();
})

