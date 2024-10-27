// Carousel Functionality
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextImage, 3000); // Change every 3 seconds

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        bar.style.width = value;
    });
});
