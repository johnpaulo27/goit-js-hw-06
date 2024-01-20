// Get the input and span elements
var fontSizeControl = document.getElementById('font-size-control');
var textElement = document.getElementById('text');

// Add input event listener to the font-size control input
fontSizeControl.addEventListener('input', function() {
  // Get the current value of the font-size control
  var fontSizeValue = fontSizeControl.value;

  // Update the font-size of the text element
  textElement.style.fontSize = fontSizeValue + 'px';
});