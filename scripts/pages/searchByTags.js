let arrayFilter;

function searchByTags(recipes) {
    const input = document.querySelector(".input");
    const searchResults = document.querySelector(".recipes");
    arrayFilter = [];


    input.addEventListener("input", (e) => {
        const searchedString = e.target.value.toLowerCase();

        // à partir de 3 caractères
        if (searchedString.length > 2) {
            searchResults.innerHTML = "";

            for (let i in recipes) {
                const recipeTitle = recipes[i].name.toLowerCase().includes(searchedString);
                const recipeDescription = recipes[i].description.toLowerCase().includes(searchedString);

                if (recipeTitle || recipeDescription) {
                    arrayFilter.push(recipes[i]);
                    const recipeModel = recipesFactory(recipes[i]);
                    const recipeCardDOM = recipeModel.getRecipesCardDOM();
                    searchResults.appendChild(recipeCardDOM);
                }
            }
        }

        // Remet toutes les recette si la barre de recherche est vide
        if (searchedString.length === 0) {
            searchResults.innerHTML = "";
            for (let i in recipes) {
                const recipeModel = recipesFactory(recipes[i]);
                const recipeCardDOM = recipeModel.getRecipesCardDOM();
                searchResults.appendChild(recipeCardDOM);
            }
        };

        recipes = arrayFilter;

    })

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




            //console.log(arrayFilter);

        })
    }


    // Affichage des recettes
    searchResults.innerHTML = "";
    recipes.forEach((recipe) => {

        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipesCardDOM();
        searchResults.appendChild(recipeCardDOM);
    })


}