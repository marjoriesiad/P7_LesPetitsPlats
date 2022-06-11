function getRecipes() {
    fetch("./data/recipes.json")
        .then((res) => res.json())
        .then((data) => {
            const recipes = data.recipes;
            displayIngredients(recipes);
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