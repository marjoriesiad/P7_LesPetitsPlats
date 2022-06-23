function research(recipes) {

    const input = document.querySelector(".input");
    const searchResult = document.querySelector(".recipes");

    // Filtrer les recettes
    input.addEventListener("input", (e) => {
        const searchedString = e.target.value.toLowerCase();

        // à partir de 3 caractères
        if (searchedString.length > 2) {
            searchResult.innerHTML = "";

            const filteredRecipe = recipes.filter(recipe => {
                const nameMatch = `${recipe.name}`.toLowerCase().includes(searchedString);
                //const descriptionMatch = `${recipe.description}`.toLowerCase().includes(searchedString);
                const numberOfIngredient = recipe.ingredients.filter(item => `${item.ingredient}`.toLowerCase().includes(searchedString)).length;

                if (numberOfIngredient > 0 || nameMatch) {
                    return recipe;
                }
            });

            // Affichage des recettes
            filteredRecipe.forEach((recipe) => {
                const recipeModel = recipesFactory(recipe);
                recipeModel.getRecipesCardDOM();
                console.log(recipe);
            });
        }

        // Remet toutes les recette si la barre de recherche est vide
        if (searchedString.length === 0) {
            searchResult.innerHTML = "";

            recipes.forEach((recipe) => {
                const recipeModel = recipesFactory(recipe);
                recipeModel.getRecipesCardDOM();
            })
        };

    })
}