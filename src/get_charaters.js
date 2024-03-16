export default function getAllCharacters() {
    const $template = document.querySelector(".template-card").content,
          $btnPrev = document.querySelector(".previous"),
          $btnNext = document.querySelector(".next"),
          $cardContainer = document.getElementById("characters"),
          $fragment = document.createDocumentFragment();

    axios.get('https://dragonball-api.com/api/characters')
    .then(function (response) {
        let data = response.data;

        console.log(data.items[0]);

        data.items.forEach(character => {   
        let $clone = document.importNode($template, true);
        $clone.querySelector("img").setAttribute("src", `${character.image}`);
        $clone.querySelector(".name").textContent = character.name;
        $clone.querySelector(".affiliation").textContent = character.affiliation;
        $clone.querySelector(".ki").textContent = `Ki: ${character.ki}`;
        $clone.querySelector(".max-ki").textContent = `Max-Ki: ${character.maxKi}`;


        $fragment.appendChild($clone);
        });

         $cardContainer.appendChild($fragment);
    })
    .catch((error) =>{
        // Manejar el error
        let errorMessage = `Ocurrio un error ${error.response.status}`
        $cardContainer.insertAdjacentHTML("afterend",`<h2>${errorMessage}</h2>`);
    })

    let pageNRo = 1,
        pagePrev=1;
    
    document.addEventListener("click", e=>{

        if(e.target==$btnNext){

            if (pageNRo<6) {
                pageNRo++;
                  
            }

            console.log(pageNRo)
            
            axios.get(`https://dragonball-api.com/api/characters?page=${pageNRo}&limit=10`)
            .then(function (response) {
                let data = response.data;
                //console.log(data.items[0]);
        
                data.items.forEach(character => {  
                $fragment.innerHTML="";     
                let $clone = document.importNode($template, true);
                $clone.querySelector("img").setAttribute("src", `${character.image}`);
                $clone.querySelector(".name").textContent = character.name;
                $clone.querySelector(".affiliation").textContent = character.affiliation;
                $clone.querySelector(".ki").textContent = `Ki: ${character.ki}`;
                $clone.querySelector(".max-ki").textContent = `Max-Ki: ${character.maxKi}`;
        
        
                $fragment.appendChild($clone);
                });
                 $cardContainer.innerHTML = "";
                 window.scrollTo(0, 0);
                 $cardContainer.appendChild($fragment);
            })
            .catch((error) =>{
                let errorMessage = `Ocurrio un error ${error.response.status}`
                $cardContainer.insertAdjacentHTML("afterend",`<h2>${errorMessage}</h2>`);
            })
          
        }


        if(e.target==$btnPrev){

            if(pageNRo>1)  pagePrev = --pageNRo;

            if(pageNRo>0){

            }
            axios.get(`https://dragonball-api.com/api/characters?page=${pagePrev}&limit=10`)
            .then(function (response) {
                let data = response.data;
                //console.log(data.items[0]);

                data.items.forEach(character => {  
                $fragment.innerHTML="";     
                let $clone = document.importNode($template, true);
                $clone.querySelector("img").setAttribute("src", `${character.image}`);
                $clone.querySelector(".name").textContent = character.name;
                $clone.querySelector(".affiliation").textContent = character.affiliation;
                $clone.querySelector(".ki").textContent = `Ki: ${character.ki}`;
                $clone.querySelector(".max-ki").textContent = `Max-Ki: ${character.maxKi}`;
        
        
                $fragment.appendChild($clone);
                });
                 $cardContainer.innerHTML = "";
                 window.scrollTo(0, 0);
                 $cardContainer.appendChild($fragment);
            })
            .catch((error) =>{
                // Manejar el error
                let errorMessage = `Ocurrio un error ${error.response.status}`
                $cardContainer.insertAdjacentHTML("afterend",`<h2>${errorMessage}</h2>`);
            })
          
        }
    })
}
