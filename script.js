function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleAccordion(element) {
    const parent = element.parentElement;
    const content = element.nextElementSibling; 
    parent.classList.toggle('active');
    content.classList.toggle('active');
}

let currentImage = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}, 3000);

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
});