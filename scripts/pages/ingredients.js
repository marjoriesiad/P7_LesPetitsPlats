function addIngredients(recipes) {

    //  GESTION DE L'OUVERTURE/FERMETURE DU BLOCK DE TAGS
    const ingredientBtn = document.querySelector(".ingredients");
    const ingredientList = document.querySelector(".ingredient-tag");

    ingredientBtn.addEventListener("click", () => {
        ingredientList.classList.toggle("open");

        if (ingredientList.classList.contains("open")) {
            ingredientList.style.display = "block";
        } else {
            ingredientList.style.display = "none";
        }
    });

    //  AFFICHAGE DES INGREDIENTS DANS LA LISTE
    const ingredientsSection = document.querySelector(".ingredient-items");
    const ingredientsArray = []; // tableau qui contient les ingrédients non filtrés
    const filteredArray = []; // tableau qui contient les ingrédients filtrés


    // récupère la partie ingrédients pour la mettre dans un tableau
    recipes.forEach((recipe) => {
        ingredientsArray.push(recipe.ingredients);
    })

    // récupère les ingrédients pour les mettre dans un seul tableau
    ingredientsArray.map(el => {
        el.map(element => {
            filteredArray.push(element.ingredient.toLowerCase());
        })
    })

    // retire les doublons du tableau filtré d'ingrédients
    let filteredIngredients = filteredArray.filter((el, i) =>
        filteredArray.indexOf(el) === i
    );

    // affichage des ingrédients dans la liste de tags
    filteredIngredients.forEach(filteredIngredient => {
        const ingredientList = document.createElement("li");
        ingredientList.classList.add("taglist");
        ingredientList.classList.add("taglist-ingredients");
        ingredientList.textContent = filteredIngredient;
        ingredientsSection.appendChild(ingredientList);
    })


    // création du tag au click sur l'ingrédient
    const tagList = document.querySelectorAll(".taglist-ingredients");
    const tagSelected = document.querySelector(".tag-selected");

    for (let i = 0; i < tagList.length; i++) {
        let tagItem = tagList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            const tagImg = document.createElement("img");
            tagSelectedLi.classList.add("taglist-selected");
            tagSelectedLi.classList.add("ingredient-selected");
            tagImg.classList.add("taglist-img");
            tagImg.setAttribute("src", "./images/delete-tag.svg");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagSelectedLi.appendChild(tagImg);
            tagItem.style.display = "none";

            //console.log(selectedTagArray);
        })
    }

    // suppression du tag au click sur celui-ci - A REFAIRE, NE FONCTIONNE PAS
    const ingredientSelected = document.querySelectorAll(".taglist-selected");

    for (i = 0; i < ingredientSelected.length; i++) {
        let selectedTag = ingredientSelected[i];

        selectedTag.addEventListener("click", () => {
            tagImg.style.display = "block";
            selectedTag.style.display = "none";
        })

    }

    // Recherche d'un ingrédient avec des mots
    const searchByIngredient = document.querySelector("#ingredient-input");
    const ingredientItem = document.querySelector(".ingredient-items");

    searchByIngredient.addEventListener("input", (e) => {
        ingredientItem.textContent = "";

        const searchedString = e.target.value.toLowerCase();
        const filteredIngr = filteredIngredients.filter(item => item.toLowerCase().includes(searchedString));

        // affichage des ingrédients suivant ce qui est tapé
        filteredIngr.forEach((ingr) => {
            const ingredientNode = document.createElement("li");
            ingredientNode.textContent = ingr;
            ingredientNode.classList.add("taglist");
            ingredientNode.classList.add("taglist-ingredients");
            ingredientItem.appendChild(ingredientNode);
        })
    })

}