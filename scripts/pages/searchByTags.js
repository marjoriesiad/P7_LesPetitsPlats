function searchByIngredientTag(recipes) {
    const searchResults = document.querySelector(".recipes");
    const ingredientTagList = document.querySelector(".ingredient-selected").textContent;
    console.log(ingredientTagList);



    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((recipeIngredient) => {
            if (ingredientTagList.toLowerCase() == recipeIngredient) {
                const recipeModel = recipesFactory(recipe);
                const recipeCardDOM = recipeModel.getRecipesCardDOM();
                searchResults.appendChild(recipeCardDOM);
            }
        })
    })




}