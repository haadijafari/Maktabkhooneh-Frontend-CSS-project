$(document).ready(function () {
  const $scrollToTopButton = $("#scroll-img");

  // Add a click event listener to the "scroll to top" button
  $scrollToTopButton.on("click", function (event) {
    event.preventDefault();
    smoothScrollToTop();
  });

  // Function to smoothly scroll to the top of the page
  function smoothScrollToTop() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000 // Adjust the duration as needed (in milliseconds)
    );
  }
});


// SLIDE SHOW
let slideIndex = 0;
let slideTimer; // Variable to hold the timer

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Set a timeout for advancing the slide after 2 seconds
  slideTimer = setTimeout(showSlides, 2000);
}

// Function to pause the slideshow
function pauseSlideshow() {
  clearTimeout(slideTimer); // Clear the timeout to stop the slideshow
}

// Function to resume the slideshow
function resumeSlideshow() {
  slideTimer = setTimeout(showSlides, 2000); // Restart the slideshow
}

// Function to navigate to the previous slide
function plusSlides(n) {
  showSlide((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlide((slideIndex = n));
}

// Function to show a specific slide
function showSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Add mouseover and mouseout event listeners to each image
let images = document.getElementsByClassName("mySlides");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", pauseSlideshow);
  images[i].addEventListener("mouseout", resumeSlideshow);
}
