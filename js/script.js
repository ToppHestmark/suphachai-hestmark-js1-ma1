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
const paragraphs = document.querySelectorAll("p");

// Loop through the p elements and change the colour of each to "red".
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};

// Question 6
// Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <>New paragraph</> and its background colour to be yellow.
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>"
resultsContainer.style = "background-color: yellow";

// Question 7
// Create a function that has one parameter called list.
// Inside the function, loop through the list parameter and console log the name property in each object.
// Call the function and pass in the cats variable in the script.js file in the repo.

// Question 8
// Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display Age unknown instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.
// The function should return the following:

// <div>
//     <h5>Blob</h5>
//     <p>10</p>
// </div>
// <div>
//     <h5>Harold</h5>
//     <p>Age unknown</p>
// </div>
// <div>
//     <h5>Blurt</h5>
//     <p>21</p>
// </div>
