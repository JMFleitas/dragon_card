export function scrollNav(menuDesktop,active) {
    window.addEventListener("scroll" ,()=>{
        if(window.scrollY>0){
            document.querySelector(menuDesktop).classList.add(active);
              }else{
                  document.querySelector(menuDesktop).classList.remove(active);
  
              }
         
    
    })
}