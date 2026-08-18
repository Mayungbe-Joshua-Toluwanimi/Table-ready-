/*
=========
Testimonial carousel
========= */
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
// console.log(prevBtn)

let currentSlide = 0;
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
})

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
})
showSlide(currentSlide);

/*
=============
Side nav
============= */
const sideNav = document.querySelector('.side-nav');
const showNavBtn = document.querySelector('#show-nav-btn');
const hideNavBtn = document.querySelector('#hide-nav-btn');
showNavBtn.addEventListener('click', showNav);
hideNavBtn.addEventListener('click', hideNav);
function showNav() {
  sideNav.classList.add('active');
}
function hideNav () {
  sideNav.classList.remove('active');
}