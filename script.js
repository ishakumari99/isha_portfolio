document.addEventListener('DOMContentLoaded', (event) => {
    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !phone || !message) {
        alert('All fields are required!');
      } else {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Dynamic welcome message
    const headerContent = document.querySelector('.header-content h2');
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
      greeting = 'Good Morning';
    } else if (hours < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    headerContent.textContent = `Hi ${greeting}`;
  });
  