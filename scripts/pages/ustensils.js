function addUstensils(recipes) {

    // GESTION DE L'OUVERTURE/FERMETURE DU BLOCK DE TAGS
    const ustensilsBtn = document.querySelector(".ustensils");
    const ustensilsList = document.querySelector(".ustensils-tag");

    ustensilsBtn.addEventListener("click", () => {
        ustensilsList.classList.toggle("open");

        if (ustensilsList.classList.contains("open")) {
            ustensilsList.style.display = "block";
        } else {
            ustensilsList.style.display = "none";
        }
    });


    // AFFICHAGES DES USTENSILES DANS LA LISTE
    const ustenstilsSection = document.querySelector(".ustensils-items");
    const ustensilsArray = [];

    // ajoute les ustensiles dans un tableau
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ust) => {
            ustensilsArray.push(ust.toLowerCase());
        })
    })

    // retire les doublons du tableau
    let filteredUstensils = ustensilsArray.filter((el, i) =>
        ustensilsArray.indexOf(el) === i
    )

    // affiche les ingrédients dans la liste de tags
    filteredUstensils.forEach((filteredUstensil) => {
        const ustensilList = document.createElement("li");
        ustensilList.classList.add("taglist");
        ustensilList.classList.add("taglist-ustensils");
        ustensilList.textContent = filteredUstensil;
        ustenstilsSection.appendChild(ustensilList);
    })


    // CREATION DU TAG AU CLICK SUR L'INGREDIENT

    // création du tag au click sur l'ingrédient
    const tagList = document.querySelectorAll(".taglist-ustensils");
    const tagSelected = document.querySelector(".tag-selected");

    for (let i = 0; i < tagList.length; i++) {
        let tagItem = tagList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            const tagImg = document.createElement("img");
            tagSelectedLi.classList.add("taglist-selected");
            tagSelectedLi.classList.add("ustensils-selected");
            tagImg.classList.add("taglist-img");
            tagImg.setAttribute("src", "./images/delete-tag.svg");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagSelectedLi.appendChild(tagImg);
            tagItem.style.display = "none";

            //console.log(selectedTagArray);
        })
    }


    // RECHERCHE D'UN INGREDIENT
    const searchByUstensil = document.querySelector("#ustensils-input");
    const ustensilsItem = document.querySelector(".ustensils-items");

    searchByUstensil.addEventListener("input", (e) => {
        ustensilsItem.textContent = "";

        const searchedString = e.target.value.toLowerCase();
        const filteredUst = filteredUstensils.filter(item => item.toLowerCase().includes(searchedString));

        // affichage du résultat de la recherche
        filteredUst.forEach((ust) => {
            const ustensilNode = document.createElement("li");
            ustensilNode.textContent = ust;
            ustensilNode.classList.add("taglist");
            ustensilNode.classList.add("taglist-ustensils");
            ustensilsItem.appendChild(ustensilNode);
        })
    })

}