// Get the input and span elements
var nameInput = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');

// Add input event listener to the input element
nameInput.addEventListener('input', function() {
  // Get the current value of the input
  var inputValue = nameInput.value;

  // Update the text content of the span with the input value or "Anonymous" if empty
  nameOutput.textContent = inputValue.trim() !== '' ? inputValue : 'Anonymous';
});