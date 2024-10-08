// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button Functionality
window.onscroll = function() {
    let backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show button when scrolled down
    } else {
        backToTopButton.style.display = "none"; // Hide button at the top of the page
    }
};

// Scroll to Top Smoothly when Button is Clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Basic Form Validation (if you have a form)
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!email.includes('@')) {
        event.preventDefault(); // Prevent form submission if email is invalid
        alert('Please enter a valid email address');
        return;
    }

    if (message.trim() === "") {
        event.preventDefault(); // Prevent submission if message is empty
        alert('Please enter your message');
    }
});
