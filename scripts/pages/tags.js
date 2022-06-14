function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;
            displayIngredients(recipes);
            displayAppliances(recipes);
            displayUstensils(recipes);
            //selectTags();
            deleteTag();
            searchIngredient(recipes);
        });

}

const tagSelected = document.querySelector(".tag-selected");
const tagArray = [];
const selectedTagArray = [];
let nouveauTableau = [];


function displayIngredients(recipes) {


    recipes.forEach((recipe) => {
        tagArray.push(recipe.ingredients)
    });


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




    const tagsList = document.querySelectorAll(".taglist-ingredients");

    for (let i = 0; i < tagsList.length; i++) {
        let tagItem = tagsList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            const tagImg = document.createElement("img");
            tagSelectedLi.classList.add("taglist-selected");
            tagSelectedLi.classList.add("ingredient-selected");
            tagImg.classList.add("taglist-img");
            tagImg.setAttribute("src", "./images/delete-tag.svg");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagSelectedLi.appendChild(tagImg);
            tagItem.style.display = "none";
            selectedTagArray.push(tagItem.textContent.toLowerCase());

            //console.log(selectedTagArray);
        })
    }
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

    const tagsList = document.querySelectorAll(".taglist-appliance");

    for (let i = 0; i < tagsList.length; i++) {
        let tagItem = tagsList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            const tagImg = document.createElement("img");
            tagSelectedLi.classList.add("taglist-selected");
            tagSelectedLi.classList.add("appliance-selected");
            tagImg.classList.add("taglist-img");
            tagImg.setAttribute("src", "./images/delete-tag.svg");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagSelectedLi.appendChild(tagImg);
            tagItem.style.display = "none";
            selectedTagArray.push(tagItem.textContent.toLowerCase());

            //console.log(selectedTagArray);
        })
    }

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
        ustensilList.setAttribute("id", "taglist");
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

    const tagsList = document.querySelectorAll(".taglist-ustensils");

    for (let i = 0; i < tagsList.length; i++) {
        let tagItem = tagsList[i];

        tagItem.addEventListener("click", () => {
            const tagSelectedLi = document.createElement("li");
            const tagImg = document.createElement("img");
            tagSelectedLi.classList.add("taglist-selected");
            tagSelectedLi.classList.add("ustensils-selected");
            tagImg.classList.add("taglist-img");
            tagImg.setAttribute("src", "./images/delete-tag.svg");
            tagSelectedLi.textContent = tagItem.textContent;
            tagSelected.appendChild(tagSelectedLi);
            tagSelectedLi.appendChild(tagImg);
            tagItem.style.display = "none";
            selectedTagArray.push(tagItem.textContent.toLowerCase());

            //console.log(selectedTagArray);
        })
    }

}


function deleteTag() {
    const tagListSelected = document.querySelectorAll(".taglist-selected");
    //console.log(tagListSelected);

    for (i = 0; i < tagListSelected.length; i++) {
        let tagItemSelected = tagListSelected[i];

        tagItemSelected.addEventListener("click", () => {
            selectedTagArray.pop(tagItemSelected.textContent);
            tagItemSelected.style.display = "none";
            //console.log(tagItemSelected);
        })
    }


}


function searchIngredient(recipes) {
    const ingredientInput = document.querySelector("#ingredient-input");
    const ingredientTagList = document.querySelectorAll(".taglist-ingredients");
    //console.log(ingredientTagList);

    let recipesMatched = [];



}



getRecipes();