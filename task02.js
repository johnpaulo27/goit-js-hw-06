// Get the ul#ingredients element
var ingredientsList = document.getElementById('ingredients');

// Array of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Create an array to store the created <li> elements
var liElements = [];

// Loop through each element in the ingredients array
ingredients.forEach(function(ingredient) {
  // Create a new <li> element
  var liElement = document.createElement('li');

  // Add the ingredient name as text content
  liElement.textContent = ingredient;

  // Add the 'item' class to the element
  liElement.classList.add('item');

  // Push the created <li> element to the array
  liElements.push(liElement);
});

// Insert all <li> elements to the ul#ingredients list in a single operation
ingredientsList.append(...liElements);

