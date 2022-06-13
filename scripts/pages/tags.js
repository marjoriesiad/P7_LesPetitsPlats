function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;
            displayIngredients(recipes);
            displayAppliances(recipes);
            displayUstensils(recipes);
            selectTags();
        });

}

const tagSelected = document.querySelector(".tag-selected");
const tagArray = [];
const testArray = new Array();

function displayIngredients(recipes) {
    const ingredientsSection = document.querySelector(".ingredient-items");

    recipes.forEach((recipe) => {
        tagArray.push(recipe.ingredients)
    });

    let nouveauTableau = [];
    tagArray.map(el => {
        el.map(element => {
            nouveauTableau.push(element.ingredient.toLowerCase());
        })
    })

    let unique = nouveauTableau.filter((el, i) =>
        nouveauTableau.indexOf(el) === i
    );


    unique.forEach(unik => {
        const ingredientList = document.createElement("li");
        ingredientList.classList.add("taglist");
        ingredientList.classList.add("taglist-ingredients");
        ingredientList.textContent = unik;
        ingredientsSection.appendChild(ingredientList);
    })


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
    const applianceArray = [];
    const applianceSection = document.querySelector(".appliance-items");

    recipes.forEach((recipe) => {
            applianceArray.push(recipe.appliance.toLowerCase());
        })
        //console.log(applianceArray)


    let testArray = [];
    applianceArray.map(el => {
        testArray.push(el.toLowerCase());
    })

    let pouet = testArray.filter((el, i) =>
        testArray.indexOf(el) === i
    )

    pouet.forEach(puet => {
        const applianceList = document.createElement("li");
        applianceList.classList.add("taglist");
        applianceList.classList.add("taglist-appliance");
        applianceList.textContent = puet;
        applianceSection.appendChild(applianceList);
    })

    const applianceBtn = document.querySelector(".appliance");
    const appList = document.querySelector(".appliance-tag");

    applianceBtn.addEventListener("click", () => {
        appList.classList.toggle("open");

        if (appList.classList.contains("open")) {
            appList.style.display = "block";
            //ingredientBtn.style.width = "1000px";
        } else {
            appList.style.display = "none";
        }
    });

}

function displayUstensils(recipes) {
    const usenstilsArray = [];
    const ustenstilsSection = document.querySelector(".ustensils-items");

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ust) => {
            usenstilsArray.push(ust.toLowerCase());
        })
    })

    let ustUnique = usenstilsArray.filter((el, i) =>
        usenstilsArray.indexOf(el) === i)


    //console.log(ustUnique);

    ustUnique.forEach(ustList => {
        const ustensilList = document.createElement("li");
        ustensilList.classList.add("taglist");
        ustensilList.classList.add("taglist-ustensils");
        ustensilList.textContent = ustList;
        ustenstilsSection.appendChild(ustensilList);
    })

    const ustensilsBtn = document.querySelector(".ustensils");
    const ustensilsList = document.querySelector(".ustensils-tag");

    ustensilsBtn.addEventListener("click", () => {
        ustensilsList.classList.toggle("open");

        if (ustensilsList.classList.contains("open")) {
            ustensilsList.style.display = "block";
        } else {
            ustensilsList.style.display = "none";
        }
    })

}


function selectTags() {
    const tagsList = document.querySelectorAll(".taglist");

    for (let i = 0; i < tagsList.length; i++) {
        let tagItem = tagsList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            //tagSelectedLi.classList.add("test");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagItem.style.display = "none";
            testArray.push(tagItem.textContent);

            console.log(testArray);
        })
    }


}



getRecipes();