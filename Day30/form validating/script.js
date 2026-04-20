const form = document.getElementById("myForm");

// Create success message element
const successMessage = document.createElement("p");
successMessage.id = "successMessage";
successMessage.textContent = "Form submitted successfully!";
form.appendChild(successMessage);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nameRegex = /^[a-zA-Z0-9]{3,16}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^[a-zA-Z0-9@_-]{6,20}$/;
  const telephoneRegex = /^[0-9]{11}$/;
  const bioRegex = /^[a-z_-]{8,50}$/;

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const telephone = document.getElementById("telephone").value;
  const bio = document.getElementById("bio").value;

  let valid = true;

  document.getElementById("firstNameError").textContent = 
    nameRegex.test(firstName) ? "" : (valid = false, "First name must be alphanumeric and 3-16 characters.");
  
  document.getElementById("lastNameError").textContent = 
    nameRegex.test(lastName) ? "" : (valid = false, "Last name must be alphanumeric and 3-16 characters.");
  
  document.getElementById("emailError").textContent = 
    emailRegex.test(email) ? "" : (valid = false, "Email must be valid (example@example.com).");
  
  document.getElementById("passwordError").textContent = 
    passwordRegex.test(password) ? "" : (valid = false, "Password must be 6-20 characters, alphanumeric (@, _, - allowed).");
  
  document.getElementById("telephoneError").textContent = 
    telephoneRegex.test(telephone) ? "" : (valid = false, "Telephone must be 11 digits.");
  
  document.getElementById("bioError").textContent = 
    bioRegex.test(bio) ? "" : (valid = false, "Bio must be lowercase letters, underscores, or hyphens (8-50 chars).");

  // Show success message if all fields are valid
  if (valid) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
});
