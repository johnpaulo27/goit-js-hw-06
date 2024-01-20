// Get the ul#categories element
var categoriesList = document.getElementById('categories');

// Get all li.item elements within ul#categories
var categoryItems = categoriesList.querySelectorAll('li.item');

// Display the number of categories in the console
console.log('Number of categories: ' + categoryItems.length);
