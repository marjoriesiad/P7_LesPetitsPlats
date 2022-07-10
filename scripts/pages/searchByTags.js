function searchByTags(recipes) {
    const searchResults = document.querySelector(".recipes");
    let arrayFilter = [];

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
        });


        arrayFilter.splice(1, 1);

        // Affichage des recettes
        searchResults.innerHTML = "";
        recipes.forEach((recipe) => {
            console.log(recipe);
            const recipeModel = recipesFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipesCardDOM();
            searchResults.appendChild(recipeCardDOM);
        })
    })



}