// Basic Types

// var isNum: number = 5;
// var company: string = "Harum Company";

//Tuple

// var isPerson: [string, number, boolean] = ["Ben", 22, true];

//Tuple array

// var employee: [string, number][] = [["John", 1], ["John", 1], ["John", 1]];

//Union (can hold more then one particular types)

// Assignment-----------------------------------------------------------

interface Meal {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
}

interface ApiResponse {
    meals: Meal[];
}

let recipeTitle = document.querySelector(".recipe-title") as HTMLHeadElement
var recipeImage = document.querySelector('.recipe-image') as HTMLImageElement
var recipeInstruction = document.querySelector(".recipe-instructions") as HTMLElement

var button = document.getElementById("getRecipeBtn") as HTMLButtonElement
var recipeContainer = document.getElementById('recipeContainer') as HTMLElement
var finderContainer = document.querySelector(".container") as HTMLElement


button.onclick = fetchData; //ganti ke fetchdata

async function fetchData(): Promise<void> {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

        if (!response.ok) {
            throw new Error("Could not fetch the data")
        }

        console.log(response)
        const data = await response.json()
        const parseData: ApiResponse = data
        console.log({ parseData })
        console.log(data.meals)
        console.log(data.meals[0])
        console.log(data.meals[0].strMealThumb)//image
        console.log(parseData.meals[0].strMeal)//title
        console.log(data.meals[0].strInstructions)//instruction


        //Fetching process has been finished, now we move on to the button functionality

        //title 
        const titleFromfetch = data.meals[0].strMeal;
        //
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





