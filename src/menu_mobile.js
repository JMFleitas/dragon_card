export default function menuMobile(ctaMenu,navLink,menuMobile) {
    document.addEventListener("click", e=>{
        const imgBtn = document.querySelector(".btn-img")
        if(e.target.matches(ctaMenu)||e.target.matches(`${ctaMenu} *`)){
            document.querySelector(menuMobile).classList.toggle("menu-active");
            imgBtn.classList.toggle("rotate-img")  
            document.body.classList.toggle("no-scroll"); 
        }
        if(e.target.matches(navLink)){
            document.querySelector(menuMobile).classList.remove("menu-active"); 
            imgBtn.classList.toggle("rotate-img--reverse");     
            imgBtn.classList.toggle("rotate-img");   
            document.body.classList.toggle("no-scroll"); 
        }
    })
}