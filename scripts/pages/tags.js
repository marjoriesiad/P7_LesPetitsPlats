function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;
            displayIngredients(recipes);
            displayAppliances(recipes)
            displayUstentils(recipes);
        });

}


function displayIngredients(recipes) {
    const ingredientsSection = document.querySelector(".ingredient-items");

    recipes.forEach((recipe) => {
        const ingredientsModel = tagsFactory(recipe);
        const ingredientsCardDOM = ingredientsModel.getIngredientsCardDOM();
        ingredientsSection.appendChild(ingredientsCardDOM);

    });

    const ingredientBtn = document.querySelector(".ingredients");
    const ingredientList = document.querySelector(".ingredient-tag");

    ingredientBtn.addEventListener("click", () => {
        ingredientList.classList.toggle("open");

        if (ingredientList.classList.contains("open")) {
            ingredientList.style.display = "block";
            //ingredientBtn.style.width = "1000px";
        } else {
            ingredientList.style.display = "none";
        }

    });
}

function displayAppliances(recipes) {
    const applianceSection = document.querySelector(".appliance-items");

    recipes.forEach((recipe) => {
        const applianceModel = tagsFactory(recipe);
        const applianceCardDOM = applianceModel.getApplianceCardDOM();
        applianceSection.appendChild(applianceCardDOM);
    })

    const applianceBtn = document.querySelector(".appliance");
    const applianceList = document.querySelector(".appliance-tag");

    applianceBtn.addEventListener("click", () => {
        applianceList.classList.toggle("open");
        if (applianceList.classList.contains("open")) {
            applianceList.style.display = "block";
        } else {
            applianceList.style.display = "none";
        }
    })
}

function displayUstentils(recipes) {
    const ustensilSection = document.querySelector(".ustensils-items");

    recipes.forEach((recipe) => {
        const ustensilModel = tagsFactory(recipe);
        const ustensilCardDOM = ustensilModel.getUstensilsCardDOM();
        ustensilSection.appendChild(ustensilCardDOM);
    })

    const ustensilBtn = document.querySelector(".ustensils");
    const ustensilList = document.querySelector(".ustensils-tag");

    ustensilBtn.addEventListener("click", () => {
        ustensilList.classList.toggle("open");

        if (ustensilList.classList.contains("open")) {
            ustensilList.style.display = "block";
        } else {
            ustensilList.style.display = "none";
        }
    })
}

getRecipes();