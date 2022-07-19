/* eslint-disable no-undef */
function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;

            // affiche les recettes
            displayRecipes(recipes);

            // affiche les tags d'ingrédients
            addIngredients(recipes);

            // affiche les tags d'appareils
            addAppliances(recipes);

            // affiche les tags d'ustensiles
            addUstensils(recipes);

            searchByTags(recipes);

            research(recipes);



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