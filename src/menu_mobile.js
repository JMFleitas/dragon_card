export default function menuMobile(ctaMenu, navLink, menuMobile) {
    document.addEventListener("click", e => {
        const imgBtn = document.querySelector(".btn-img"),
            $menuMobile = document.querySelector(menuMobile),
            $soundMenuMb = document.createElement("audio");
        $soundMenuMb.src = "../assets/sound-menu.mp3";

        if (e.target.matches(ctaMenu) || e.target.matches(`${ctaMenu} *`)) {
            $menuMobile.classList.toggle("menu-active");
            imgBtn.classList.toggle("rotate-img")
            document.body.classList.toggle("no-scroll");

            if ($menuMobile.classList.contains("menu-active")) {
                $soundMenuMb.play()
            }
        }
        if (e.target.matches(navLink)) {
            document.querySelector(menuMobile).classList.remove("menu-active");
            imgBtn.classList.toggle("rotate-img--reverse");
            imgBtn.classList.toggle("rotate-img");
            document.body.classList.toggle("no-scroll");
        }
    })
}