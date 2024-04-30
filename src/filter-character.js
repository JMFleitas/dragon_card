export default function filterCharacter() {
    const $form = document.querySelector('.form'),
        $cardContainer = document.getElementById("characters"),
        $templateInfo = document.querySelector('.template-info').content,
        $fragment = document.createDocumentFragment();


    $form.addEventListener('submit', e => {
        e.preventDefault();
        const $iptName = document.querySelector('.ipt-search').value,

            API = `https://dragonball-api.com/api/characters?name=${$iptName}`;

        fetch(API)
            .then(resp => {
                return resp.ok ? resp.json() : Promise.reject(resp);
            })
            .then(data => {
                console.log(data);
                $cardContainer.innerHTML = '';
                document.querySelector('.buttons').style.display = "none";

                if (data.length > 0) {
                    data.forEach(character => {

                        $templateInfo.querySelector('.info-img').src = character.image ? character.image : "/assets/alternativa.png";
                        $templateInfo.querySelector('.name').textContent = character.name;
                        $templateInfo.querySelector('.description').textContent = character.description;

                        let $clone = document.importNode($templateInfo, true);

                        $fragment.appendChild($clone);

                    });
                } else {
                    const $noResult = document.createElement('h2');
                    $noResult.textContent = "El personaje no existe";
                    $fragment.appendChild($noResult);
                }

                $cardContainer.appendChild($fragment);
            })
            .catch(error => {
                console.log(error);
            });
    });


}
