const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
// Create an object called cat.
// Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
const cat = {
    complain: function() {
        return "Meow!";
    }
}
console.log(cat.complain());

// Question 2
// Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
// Change its innerHTML value to "Updated heading".
const heading = document.querySelector("h3");
heading.textContent = "Updated heading";

// Question 3
// Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style = "font-size: 2em;";

// Question 4
// Add a class to the heading variable called subheading.
heading.classList.add("subheading");

// Question 5
// Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
// Loop through the p elements and change the colour of each to "red".
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};

// Question 6
// Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <>New paragraph</> and its background colour to be yellow.
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML += "<p>New paragraph</p>"
resultsContainer.style = "background-color: yellow";

// Question 7
// Create a function that has one parameter called list.
// Inside the function, loop through the list parameter and console log the name property in each object.
// Call the function and pass in the cats variable in the script.js file in the repo.
function listFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}
listFunction(cats);

// Question 8
// Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display Age unknown instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.
function createCats(cats) {
    let finalHTML = "";

    for (let i = 0; i < cats.length; i++) {
        let catsName = cats[i].name;
        let catsAge = cats[i].age;
        if(!catsAge) {
            catsAge = "Age unknown";
        } 

        finalHTML += `<div>
                    <h5>${catsName}</h5>
                    <p>${catsAge}</p>
                </div>`;
    }
    return finalHTML;
};

createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
