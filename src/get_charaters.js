export default function getAllCharacters() {


    const $template = document.querySelector(".template-card").content,
        $btnPrev = document.querySelector(".previous"),
        $btnNext = document.querySelector(".next"),
        $btnSearch = document.querySelector(".btn-search *"),
        $cardImg = document.querySelector(".card"),
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
        .catch((error) => {
            // Manejar el error
            let errorMessage = `Ocurrio un error ${error.response.status}`
            $cardContainer.insertAdjacentHTML("afterend", `<h2>${errorMessage}</h2>`);
        })


    //!Pagination   


    let pageNRo = 1,
        pagePrev = 1;

    const $soundPageBtn = document.createElement("audio");
    $soundPageBtn.src = "../assets/sound-btn-page.mp3";
    const $soundBtnSearch = document.createElement("audio");
    $soundBtnSearch.src = "../assets/search-btn.mp3";
    const $soundCard = document.createElement("audio");
    $soundCard.src = "../assets/sound-card.mp3";



    document.addEventListener("click", e => {

        if (e.target == $btnSearch) {
            $soundBtnSearch.play();
        }

        if (e.target == $cardImg) {
            alert("h")
            $soundCard.play();
        }

        if (e.target == $btnPrev) {

            $soundPageBtn.play();

            if (pageNRo > 1) pagePrev = --pageNRo;

            axios.get(`https://dragonball-api.com/api/characters?page=${pagePrev}&limit=10`)
                .then(function (response) {
                    let data = response.data;
                    //console.log(data.items[0]);

                    data.items.forEach(character => {
                        $fragment.innerHTML = "";
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
                .catch((error) => {
                    // Manejar el error
                    let errorMessage = `Ocurrio un error ${error.response.status}`
                    $cardContainer.insertAdjacentHTML("afterend", `<h2>${errorMessage}</h2>`);
                })

        }

        if (e.target == $btnNext) {

            $soundPageBtn.play();

            if (pageNRo < 6) pageNRo++;

            axios.get(`https://dragonball-api.com/api/characters?page=${pageNRo}&limit=10`)
                .then(function (response) {
                    let data = response.data;
                    //console.log(data.items[0]);

                    data.items.forEach(character => {
                        $fragment.innerHTML = "";
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
                .catch((error) => {
                    let errorMessage = `Ocurrio un error ${error.response.status}`
                    $cardContainer.insertAdjacentHTML("afterend", `<h2>${errorMessage}</h2>`);
                })

        }
    })
}
