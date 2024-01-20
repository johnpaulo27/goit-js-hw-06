// Get the elements
var decrementButton = document.querySelector('[data-action="decrement"]');
var incrementButton = document.querySelector('[data-action="increment"]');
var valueElement = document.getElementById('value');

// Initialize counter value
var counterValue = 0;

// Update the interface with the initial value
valueElement.textContent = counterValue;

// Add click event listeners to the buttons
decrementButton.addEventListener('click', function() {
  // Decrease the counter value
  counterValue--;

  // Update the interface
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', function() {
  // Increase the counter value
  counterValue++;

  // Update the interface
  valueElement.textContent = counterValue;
});