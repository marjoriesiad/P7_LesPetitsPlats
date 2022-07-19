function addAppliances(recipes) {

    // GESTION DE L'OUVERTURE/FERMETURE DU BLOCK DE TAGS
    const applianceBtn = document.querySelector(".appliance");
    const appList = document.querySelector(".appliance-tag");
    const arrow = document.querySelector(".arrow");

    applianceBtn.addEventListener("click", () => {
        appList.classList.toggle("open");

        if (appList.classList.contains("open")) {
            appList.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
            applianceBtn.style.width = "66%";
        } else {
            appList.style.display = "none";
            arrow.style.transform = "rotate(180deg)";
            applianceBtn.style.width = "170px";
        }
    });


    // AFFICHAGE DES APPAREILS DANS LA LISTE
    const applianceSection = document.querySelector(".appliance-items");
    const applianceArray = []; // tableau qui contient les appareils non filtrés

    // récupère tous les appareils pour les mettre dans un tableau
    recipes.forEach((recipe) => {
        applianceArray.push(recipe.appliance.toLowerCase());
    })

    // retire les doublons du tableau des appareils
    let filteredAppliances = applianceArray.filter((el, i) =>
        applianceArray.indexOf(el) === i
    )

    // affichage des appareils dans la liste de tags
    filteredAppliances.forEach(filteredAppliance => {
        const applianceList = document.createElement("li");
        applianceList.classList.add("taglist");
        applianceList.classList.add("taglist-appliance");
        applianceList.textContent = filteredAppliance;
        applianceSection.appendChild(applianceList);
    })


    // CREATION DU TAG AU CLICK SUR L'APPAREIL
    const tagSelected = document.querySelector(".tag-selected");

    Array.from(document.querySelectorAll(".appliance-items")).forEach(function(el) {
        el.addEventListener("click", (e) => {
            if (e.target && e.target.classList.contains("taglist-appliance", "tag-selected")) {
                const tagSelectedLi = document.createElement("li");
                const tagImg = document.createElement("img");
                tagSelectedLi.classList.add("taglist-selected");
                tagSelectedLi.classList.add("appliance-selected");
                tagImg.classList.add("taglist-img");
                tagImg.setAttribute("src", "./images/delete-tag.svg");
                tagSelectedLi.textContent = e.target.textContent;
                tagSelected.appendChild(tagSelectedLi);
                tagSelectedLi.appendChild(tagImg);
                e.target.style.display = "none";
                searchByTags(recipes);
            }
        });
    });



    // RECHERCHE D'UN APPAREIL AVEC DES MOTS
    const searchByAppliance = document.querySelector("#appliance-input");
    const applianceItem = document.querySelector(".appliance-items");

    searchByAppliance.addEventListener("input", (e) => {
        applianceItem.textContent = "";

        const searchedString = e.target.value.toLowerCase();
        const filteredApp = filteredAppliances.filter(item => item.toLowerCase().includes(searchedString));

        // affichage des appareils suivant ce qui est tapé
        filteredApp.forEach((app) => {
            const applianceNode = document.createElement("li");
            applianceNode.textContent = app;
            applianceNode.classList.add("taglist");
            applianceNode.classList.add("taglist-appliance");
            applianceItem.appendChild(applianceNode);
        })

    })
}