// Get the ul#categories element
var categoriesList = document.getElementById('categories');

// Get all li.item elements within ul#categories
var categoryItems = categoriesList.querySelectorAll('li.item');

// Display the number of categories in the console
console.log('Number of categories: ' + categoryItems.length);

// Loop through each li.item element and display category details
categoryItems.forEach(function(item) {
  // Get the category name from the h2 element
  var categoryName = item.querySelector('h2').textContent;

  // Get all nested li elements within the category
  var categoryElements = item.querySelectorAll('ul li');

  // Display category details in the console
  console.log('Category: ' + categoryName);
  console.log('Elements: ' + categoryElements.length);
  console.log('------------------------');
});
