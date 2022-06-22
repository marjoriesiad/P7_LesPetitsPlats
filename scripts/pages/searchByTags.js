function searchByIngredientTag(recipes) {
    const searchResults = document.querySelector(".recipes");
    const ingredientTagList = document.querySelector(".ingredient-selected").textContent;



    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((recipeIngredient) => {
            if (ingredientTagList.toLowerCase() == recipeIngredient) {
                console.log(recipe.id);
            }
        })
    })




}