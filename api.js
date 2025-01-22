function handleString(recipe){
    const name= recipe.name.toUpperCase();
    const cuisine = recipe.cuisine.toLowerCase();
     return`
     <h2 class ="product-title">${name}</h2> 
     <p class="product-description"> cuisine Type: ${cuisine}</p>`

}
function handleNumber(recipe){
    const reting=recipe.rating*2
    const cookTime = recipe.cookTimeMinutes/60
    return`
    <p class="product-description">Rating: ${reting}</p>
    <p class="product-description">Cook Time: ${cookTime.toFixed(1)} hours</p>
    `
}
function handleArrays(recipe){
    const ingredients = recipe.ingredients;
    const ingredientList = ingredients.map(ingredients=>` <li >${ingredients}</li>`).join('');
    return`
    <div class="product-description">
    <h3<> Ingrendients: </h3>
    <ul>${ingredientList}</ul>
    </div>`

}
function handleImage(recipe){
    return`
    <img src="${recipe.image}"  class="product-image" alt="${recipe.name}">`
}
function displayRecipe(recipe){
    const productContainer = document.getElementById('productContainer');
    const content =`
    ${handleImage(recipe)}
    ${handleString(recipe)}
    ${handleNumber(recipe)}
    ${handleArrays(recipe)}
    <div class="product-hardness"> Difficulty : ${recipe.dificulty}<div>`

    productContainer.innerHTML=content;
}
fetch('https://dummyjson.com/recipes/3')
.then(response => response.json())
.then(recipe => {
    displayRecipe(recipe);
})
.catch(error => {
    console.error('fetch Error:', error)
});