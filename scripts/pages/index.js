function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;
            displayRecipes(recipes);
            addIngredients(recipes);
            addAppliances(recipes);
            addUstensils(recipes);
        });

}

function displayRecipes(recipes) {
    const recipeSection = document.querySelector(".recipes");

    recipes.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipesCardDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
}

getRecipes();