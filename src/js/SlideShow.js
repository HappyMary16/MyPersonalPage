let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let playing = true;
let pauseButton = document.getElementById('pause');

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

function pausePlay () {
    playing ? pauseSlideshow() : playSlideshow();
}

function next() {
    pauseSlideshow();
    nextSlide();
}

function previous() {
    pauseSlideshow();
    previousSlide();
}
