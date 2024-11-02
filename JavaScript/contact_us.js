document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // Display success message
      document.getElementById("successMessage").style.display = "block";

      // Clear the form fields
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all the fields.");
    }
  });