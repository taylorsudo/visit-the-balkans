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