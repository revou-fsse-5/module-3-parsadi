const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
        "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

var recipeTitle = document.querySelector(".recipe-title");
var recipeImage = document.querySelector('.recipe-image');
var recipeInstruction = document.querySelector(".recipe-instructions");

var button = document.getElementById("getRecipeBtn");
var recipeContainer = document.getElementById('recipeContainer');

button.onclick = handleClick;

function handleClick() {
    document.querySelector(".container").style.width = "50%";
    recipeContainer.style.display = "flex";
    recipeContainer.style.flexDirection = "column";
    recipeContainer.style.alignItems = "center";
    button.style.display = "none";
    recipeImage.src = "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg";
    recipeImage.style.width = "200px";
    recipeTitle.innerHTML = recipe.title;
    console.log(recipeTitle);
    // recipeInstruction.innerHTML = formattedInstructions;
    // recipeInstruction.innerHTML = recipe.instructions;
    console.log(recipeInstruction);
    recipeInstruction.style.textAlign = "center";


    const regex = /(\d\.\s[^.]+(?:\.(?!\d\.)|$))/g;
    const instructionsArray = recipe.instructions.match(regex);
    const formattedInstructions = instructionsArray.join("\n");
    recipeInstruction.innerHTML = formattedInstructions;
    for (let i = 1; i < formattedInstructions.length; i = i + 1) {

    }

    console.log(formattedInstructions);


}
