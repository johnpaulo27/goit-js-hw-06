// Function to generate a random hex color
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  // Get the button and color span elements
  var changeColorButton = document.querySelector('.change-color');
  var colorSpan = document.querySelector('.color');

  // Add click event listener to the button
  changeColorButton.addEventListener('click', function() {
    // Generate a random hex color
    var randomColor = getRandomHexColor();

    // Update the body background color
    document.body.style.backgroundColor = randomColor;

    // Update the color value in the span
    colorSpan.textContent = randomColor;
  });