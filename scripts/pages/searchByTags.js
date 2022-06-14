function searchByTags(recipes) {

    const tagsSelected = document.querySelectorAll("taglist-selected");
    let selectedTags = [];

    tagsSelected.forEach((tag) => {
        tag.addEventListener("click", () => {
            selectedTags.push(tag);
            console.log(selectedTags);
        })

    })



}