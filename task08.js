  // Get the form element
  var loginForm = document.querySelector('.login-form');

  // Add submit event listener to the form
  loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email and password input elements
    var emailInput = loginForm.elements.email;
    var passwordInput = loginForm.elements.password;

    // Check if the fields are not empty
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      // Display alert if any field is empty
      alert('Please fill in all fields.');
    } else {
      // Collect field values into an object
      var formData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      // Display the object in the console
      console.log(formData);

      // Clear the values of the form fields
      loginForm.reset();
    }
  });