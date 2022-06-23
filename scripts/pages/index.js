let recipes = [];

function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;

            research(recipes)

            // affiche les recettes
            displayRecipes(recipes);

            // affiche les tags d'ingrédients
            addIngredients(recipes);

            // affiche les tags d'appareils
            addAppliances(recipes);

            // affiche les tags d'ustensiles
            addUstensils(recipes);


            searchByIngredientTag(recipes);


        });

}

function displayRecipes(recipes) {
    const recipeSection = document.querySelector(".recipes");
    recipeSection.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipesCardDOM();
        recipeSection.appendChild(recipeCardDOM);

    });
}

getRecipes();