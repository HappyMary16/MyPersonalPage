const previousButton = document.getElementById('previous');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let playing = true;

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

previousButton.addEventListener('click', () => {
    pauseSlideshow();
    previousSlide();
});

pauseButton.addEventListener('click', () => {
    playing ? pauseSlideshow() : playSlideshow();
});

nextButton.addEventListener('click', () => {
    pauseSlideshow();
    nextSlide();
});