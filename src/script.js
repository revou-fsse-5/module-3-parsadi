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
var finderContainer = document.querySelector(".container");


button.onclick = fetchData; //ganti ke fetchdata

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

// the fetch method is an promise. Thus we use then() when its resolve
// console.log(
//     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then((response) => {
//             console.log(response)
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error("Could not fetch the data")
//             }
//         })
//         .then((data) => {
//             console.log(data)
//             console.log(data.meals[0].idMeal);
//         })
//         .catch(error => console.log('error'))
// );


async function fetchData() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

        if (!response.ok) {
            throw new Error("Could not fetch the data")
        }

        console.log(response)
        const data = await response.json()
        console.log(data)
        console.log(data.meals)
        console.log(data.meals[0])
        console.log(data.meals[0].strMealThumb)//image
        console.log(data.meals[0].strMeal)//title
        console.log(data.meals[0].strInstructions)//instruction


        //Fetching process has been finished, now we move on to the button functionality

        //title 
        const titleFromfetch = data.meals[0].strMeal;
        recipeTitle.innerHTML = titleFromfetch;

        //image
        const isImageFromFetch = data.meals[0].strMealThumb;
        recipeImage.src = isImageFromFetch;
        //style
        recipeImage.style.width = "200px";
        recipeImage.style.left = "80%";

        //instructions
        const isInstructionFromFetch = data.meals[0].strInstructions;
        recipeInstruction.innerHTML = isInstructionFromFetch;
        //style
        recipeInstruction.style.textAlign = "center";

        // Container Style
        finderContainer.style.width = "50%";

        //Receipe container style
        recipeContainer.style.display = "flex";
        recipeContainer.style.flexDirection = "column";
        recipeContainer.style.alignItems = "center";

        //Button
        button.style.display = "none";

    }
    catch (error) {
        console.error("error", error);
    }
}
