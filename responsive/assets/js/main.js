// Navbar Tracker
$(document).ready(function () {
  // Add scroll spy behavior to the body
  $("body").scrollspy({ target: "#navbarCollapse", offset: 50 });

  // Smooth scrolling when a navigation item is clicked
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Back to top
$(document).ready(function () {
  // Initialize Bootstrap Tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Show or hide the "Back to Top" button based on the user's scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  // Smooth scrolling to the top
  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
