// Slider Functionality
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        errorMessage.textContent = 'All fields are required';
        errorMessage.style.color = 'red';
        return;
    }

    errorMessage.textContent = '';
    alert('Message sent successfully!');
    form.reset();
});