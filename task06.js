// Get the input element
var validationInput = document.getElementById('validation-input');

// Add blur event listener to the input element
validationInput.addEventListener('blur', function() {
  // Get the specified length from the data-length attribute
  var expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);

  // Get the current value of the input
  var inputValue = validationInput.value;

  // Check if the number of characters is correct
  if (inputValue.length === expectedLength) {
    // Apply valid style
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    // Apply invalid style
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});