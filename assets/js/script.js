/* Side Navigation
Adapted from How TO - Side Navigation by W3Schools
https://www.w3schools.com/howto/howto_js_sidenav.asp */

// Set the default width of the side navigation to 25rem
function openNav() {
  document.getElementById("nav").style.right = "0";
}

// Set the width of the side navigation to 0
function closeNav() {
  document.getElementById("nav").style.right = "-25rem";
}

/* Back to Top
Adapted from Bootstrap Scroll To Top Button
https://mdbootstrap.com/docs/standard/extended/back-to-top/ */ 
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("top");
  const scrollThreshold = window.innerHeight / 2;

  // When the user scrolls down 250px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > scrollThreshold || 
      document.documentElement.scrollTop > scrollThreshold
    ) {
      mybutton.classList.add("visible");
    } else {
      mybutton.classList.remove("visible");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});