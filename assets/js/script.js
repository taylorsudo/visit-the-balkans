/* Side Navigation
Adapted from How TO - Side Navigation by W3Schools
https://www.w3schools.com/howto/howto_js_sidenav.asp */

// Set the default width of the side navigation to 25rem
function openNav() {
  document.getElementById("nav").style.width = "25rem";
}

// Set the width of the side navigation to 0
function closeNav() {
  document.getElementById("nav").style.width = "0";
}

/* Back to Top
Adapted from Bootstrap Scroll To Top Button
https://mdbootstrap.com/docs/standard/extended/back-to-top/ */ 
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("top");

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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