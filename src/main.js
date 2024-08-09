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


// document.querySelector(".container").style.width = "50%";
// recipeContainer.style.display = "flex";
// recipeContainer.style.flexDirection = "column";
// recipeContainer.style.alignItems = "center";
// button.style.display = "none";
// recipeImage.src = "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg";
// recipeImage.style.width = "200px";
// recipeTitle.innerHTML = recipe.title;
// console.log(recipeTitle);
// console.log(recipeInstruction);
// recipeInstruction.style.textAlign = "center";


//     .then(response => response.json())
//     .then(data => console.log(data.meals))



//promise. i promise to make a best video, if resolve, then(), you get the video, if not then ive rejected.

//anything that goes after then() will be resolve. It is like when you make a promise then you do it

// then is for the promise that resolved, while catch() is for promise that rejected

// let p = new Promise((resolve, reject) => {
//     const a = 1 + 2;
//     if (a === 2) {
//         resolve("thats true")
//     } else {
//         reject("thats wrong")
//     }
// })

// p.then((massage) => {
//     console.log(massage);
// }).catch((massage) => {
//     console.log(massage);
// })

// const plane = true;
// const fly = true;

// function isPlanefly (ifItsFly, ifItsNot){
//     if(plane){
//         ifItsFly({
//             "
//         })
//     }
// }

//async and await is just sugarcoater to promises so its better to work with

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let isTotal = 0;
for (let i = 0; i < arr_1.length; i++) {
    console.log(arr_1[i]);
    isTotal = isTotal + arr_1[i];
    console.log(isTotal);
};

console.log(isTotal);

// ex 3
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

for (let i = arr.length - 1; i >= 0; i--) {
    let arrReverse = arr[i];
    console.log(arrReverse);
}

//ex 4
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output: 
// [12, 7, 16]

let arrCalc = [];

for (let i = 0; i < arr_3.length; i++) {
    arrCalc.push(arr_3[i] + arr_4[i]);
    console.log(arrCalc);
}

// ex 5

let str1 = "javascript";
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 

let isNewArr = [...str1];
let isZ = 'Z'
console.log(isNewArr);
for (let i = 0; i < isNewArr.length; i++) {
    if ((i + 1) % 2 > 0) {  // kalo dikasi ! gak works
        console.log(isNewArr[i]);
    } else if ((i + 1) % 2 === 0) {
        isNewArr[i] = isZ;
        console.log(isNewArr[i])
    }
}

//ex6
let str2 = "don’t know why";
// Example output: 
// “yes” 
console.log(str2.length)

for (let i = 0; i < str2.length; i++) {
    if (!(i = "y")) { // kenapa kalo dibuat === tidak jalan, padahal tipe data sama sama string
        console.log(i); // kenapa yang 'no' tidak ter console log
        console.log("NO");
    } else if (i = "y") {
        console.log(i);
        console.log("YES");
    }
}

//ex 7
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

for (let i = n2 - 1; i > 0; i--) {
    console.log(i)
    n2 = n2 * [i];
    console.log(n2);
}

// ex 8
// let pin = 9000;
// // Example output:
// // Please make your guess: 
// // 4544 
// // Sorry that was wrong.
// // Please make your guess: 
// // 4444
// // Sorry that was wrong.
// // Please make your guess: 
// // 0704
// // That was correct!


// let isUserArr = [prompt("whats your password"), prompt("whats your password"), prompt("whats your password"), prompt("whats your password")];
// function passwordInput() {
//     // let isUser = prompt("whats your password");
//     // console.log(isUser);
//     for (let i = 1; i <= isUserArr.length; i++) {
//         // if (!(isUser === pin)) {
//         //     console.log("wrong")
//         // } else if (isUser === pin) {
//         //     console.log("correct")
//         // }
//         if (isUserArr[i] === pin) {
//             console.log(isUserArr[i]);
//             console.log("correct")
//         } else {
//             console.log("wrong")
//         }
//     }
// }

// passwordInput();

// // passwordInput();
// // function passwordInput() {
// //     // let isUser = prompt("whats your password");
// //     // console.log(isUser);
// //     for (let i = 1; i <= 4; i++) {
// //         let isUser = prompt("whats your password");
// //         console.log(isUser);
// //         if (isUser === pin)
// //             console.log("correct") break;
// //     }
// // }


// //w3 function
// // Write a JavaScript function that reverses a number.
// // Example x = 32243;
// // Expected Output : 34223

let x = 32243;
function isReverse() {
    let isNewArr = x.toString().split('');
    let isReverseArr = [];
    for (let i = isNewArr.length - 1; i >= 0; i--) {
        console.log(isNewArr[i]);
        isReverseArr.push(isNewArr[i]);

    }

    return isReverseArr;
}

console.log(isReverse(x));

//w3 function no.2
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalidrome(str) {
    let isReverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        isReverseStr = isReverseStr + str[i];
        console.log(isReverseStr);
    }
    if (isReverseStr === str) {
        console.log("its Palidrome")
    } else {
        console.log("its not a Palidrome")
    }
}

isPalidrome("benedictus")

function combination(str) {
    let list_of_string = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            list_of_string.push(str.slice(i, j))
        }
    }
    return list_of_string;
}

console.log(combination("benedictus"))