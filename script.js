// Add this code below your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const projectLinks = document.querySelectorAll('.work a[data-website-url]');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const websiteURL = link.getAttribute('data-website-url');
            if (websiteURL) {
                window.open(websiteURL, '_blank'); // Open the link in a new tab/window
            }
        });
    });
});
// Add this code below your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-icons a[data-profile-url]');

    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const profileURL = link.getAttribute('data-profile-url');
            if (profileURL) {
                window.open(profileURL, '_blank'); // Open the link in a new tab/window
            }
        });
    });
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }