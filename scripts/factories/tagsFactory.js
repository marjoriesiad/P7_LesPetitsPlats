function tagsFactory(data) {
    const { ingredients, appliance, ustensils } = data;
    //console.log(ustensils);

    function getIngredientsCardDOM() {
        const ingredientTag = document.createElement("li");
        ingredientTag.classList.add("ingredient-taglist");
        const array = new Array();
        ingredients.forEach((ingredientList) => {


            array.push(ingredientList.ingredient);

            ingredientTag.textContent = ingredientList.ingredient;

        })

        //console.log(array);
        return (ingredientTag);
    }

    function getApplianceCardDOM() {
        const applianceTag = document.createElement("li");
        applianceTag.classList.add("appliance-taglist");

        applianceTag.textContent = appliance;

        return (applianceTag);
    }


    function getUstensilsCardDOM() {
        const ustensilsTag = document.createElement("li");
        ustensilsTag.classList.add("ustensils-taglist");

        ustensils.forEach((ustensil) => {
            console.log(ustensil);
            ustensilsTag.textContent = ustensil;

        })

        return (ustensilsTag);

    }
    //console.log(appliance);
    return { ingredients, appliance, ustensils, getIngredientsCardDOM, getApplianceCardDOM, getUstensilsCardDOM };

}