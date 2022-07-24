/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let ingredientTag = document.querySelectorAll(".taglist-ingredients");
let applianceTag = document.querySelectorAll(".taglist-appliance");
let ustensilTag = document.querySelectorAll(".taglist-ustensils");

/* Event listener sur l'input recherche */
document.querySelector(".input").addEventListener("input", (e) => {
    const searchedString = e.target.value.toLowerCase();
    searchByTags(recipes, searchedString);
});

/* searchByTags(recipes, ''); pour event ajout/suppression tag */

/* Fonction de tri de mes recettes */
function searchByTags(recipes, searchTerms) {

    /* Div des recettes pour affichage */
    const searchResults = document.querySelector(".recipes");

    /* Initialisation de mon tableau des recettes filtrees */
    let arrayFilter;

    console.log("Recettes initiales", recipes);

    // filtre recettes à partir de 3 caractères
    if (searchTerms.length > 2) {
        const taglist = document.querySelectorAll(".taglist");
        /* Tri des recettes par le moteur de recherche */

        arrayFilter = recipes.filter(function(recipe) {
            return recipe.name.toLowerCase().includes(searchTerms);
        });

    } else {
        /* Attribution de l'ensemble des recettes à arrayFilter */
        arrayFilter = recipes;
    }

    /* Verification si tags sélectionner */
    if (Array.from(document.querySelectorAll(".tag-selected li")).length !== 0) {
        /* Recuperation de l'ensemble des tags */
        Array.from(document.querySelectorAll(".tag-selected li")).forEach(function(el) {
            arrayFilter.forEach(recipe => {
                if (el.classList.contains("ingredient-selected")) {
                    recipe.ingredients.forEach((ingr) => {
                        if (ingr.ingredient.toLowerCase() !== el.textContent.toLowerCase()) {
                            arrayFilter.splice(arrayFilter.indexOf(el.textContent), 1);
                        }
                    });
                }

                if (el.classList.contains("appliance-selected")) {
                    if (recipe.appliance.toLowerCase() !== el.textContent.toLowerCase()) {
                        arrayFilter.splice(arrayFilter.indexOf(el.textContent), 1);
                    }
                }

                if (el.classList.contains("ustensils-selected")) {
                    recipe.ustensils.filter(item => {
                        if (item.includes(el.textContent.toLowerCase())) {

                        } else {
                            arrayFilter.splice(arrayFilter.indexOf(el.textContent), 1);
                        }
                    });
                }
            });
        });
    }


    console.log('Tableau filtre par les tags et le moteur de recherche', arrayFilter);

    /* si pas de recettes disponibles affichage d'un message d'erreur */

    if (arrayFilter.length === 0) {
        searchResults.innerHTML = "Aucune recette trouvée.";
    } else {
        // Affichage des recettes
        searchResults.innerHTML = "";
        arrayFilter.forEach((recipe) => {
            const recipeModel = recipesFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipesCardDOM();
            searchResults.appendChild(recipeCardDOM);
        });
    }







}