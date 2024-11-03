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

//Ripple Effect Code Here
const buttons = document.querySelectorAll('.ripple')

buttons.forEach( button =>{
    button.addEventListener('click', function(e){
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span')
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left= xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500)
    })
})

//Nav Bar Code
const mobile = document.getElementById('mobile');
const navLinks = document.querySelector('.nav_links');

mobile.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
});
