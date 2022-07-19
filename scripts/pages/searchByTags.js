/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let arrayFilter = [];

function searchByTags(recipes) {
    const searchResults = document.querySelector(".recipes");
    arrayFilter = [];
    if (Array.from(document.querySelectorAll(".tag-selected li")).length === 0) {
        arrayFilter = recipes;
    } else {
        Array.from(document.querySelectorAll(".tag-selected li")).forEach(function(el) {
            recipes.forEach(recipe => {
                if (el.classList.contains("ingredient-selected")) {
                    recipe.ingredients.forEach((ingr) => {
                        if (ingr.ingredient.toLowerCase() === el.textContent.toLowerCase()) {
                            if (!arrayFilter.includes(recipe)) {
                                arrayFilter.push(recipe);
                            }
                        }
                    });

                }

                if (el.classList.contains("appliance-selected")) {
                    if (recipe.appliance.toLowerCase() === el.textContent.toLowerCase()) {
                        if (!arrayFilter.includes(recipe)) {
                            arrayFilter.push(recipe);
                        }
                    }
                }



                if (el.classList.contains("ustensils-selected")) {
                    recipe.ustensils.filter(item => {
                        if (item.includes(el.textContent.toLowerCase())) {
                            if (!arrayFilter.includes(recipe)) {
                                arrayFilter.push(recipe);
                            }
                        }
                    });
                }

                recipes = arrayFilter;


                if (arrayFilter.length === 0) {
                    searchResults.innerHTML = "Aucune recette trouvée.";
                }
            });


            arrayFilter.splice(1, 1);

            research(arrayFilter);



            //console.log(arrayFilter);

        });
    }


    // Affichage des recettes
    searchResults.innerHTML = "";
    recipes.forEach((recipe) => {

        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipesCardDOM();
        searchResults.appendChild(recipeCardDOM);
    });

}