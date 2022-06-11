function tagsFactory(data) {
    const { ingredients, appliance, ustensils } = data;

    function getIngredientsCardDOM() {
        const ingredientTag = document.createElement("li");
        ingredientTag.classList.add("taglist");

        const ingredientList = [];

        ingredients.map(ingr => {
            ingredientList.push(ingr.ingredient);
        })

        //console.log(ingredientList);

        return (ingredientTag);
    }






    function getApplianceCardDOM() {
        const applianceTag = document.createElement("li");
        applianceTag.classList.add("taglist");

        applianceTag.textContent = appliance;

        return (applianceTag);
    }


    function getUstensilsCardDOM() {
        const ustensilsTag = document.createElement("li");
        ustensilsTag.classList.add("taglist");

        ustensils.forEach((ustensil) => {
            //console.log(ustensil);
            ustensilsTag.textContent = ustensil;

        })

        return (ustensilsTag);

    }
    //console.log(appliance);
    return { ingredients, appliance, ustensils, getIngredientsCardDOM, getApplianceCardDOM, getUstensilsCardDOM };

}