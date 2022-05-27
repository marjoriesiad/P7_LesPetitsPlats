function recipesFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    function getRecipesCardDOM() {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const titleContent = document.createElement("div");
        const cookingTime = document.createElement("p");
        const cookingIcon = document.createElement("img");
        const cardTitle = document.createElement("h5");
        const ingredientList = document.createElement("ul");


        card.classList.add("card");
        img.classList.add("card-img-top");
        img.setAttribute("src", "./images/thumbnail.svg");
        cardBody.classList.add("card-body");
        titleContent.classList.add("title-content");
        cookingIcon.setAttribute("src", "./images/timer.svg");
        cardTitle.classList.add("card-title");
        cookingIcon.classList.add("cooking-icon");


        cardTitle.textContent = name;
        cookingTime.textContent = time;

        ingredients.forEach((ingredient) => {
            const ingredientItem = document.createElement("li");
            ingredientItem.innerHTML = ingredient;
            ingredientList.appendChild(ingredientItem);

        })

        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(titleContent);
        titleContent.appendChild(cardTitle);
        titleContent.appendChild(cookingTime);
        cookingTime.appendChild(cookingIcon);
        cardBody.appendChild(ingredientList);



        return (card);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipesCardDOM };

}